import { initializeApp } from "firebase/app"
import { getFirestore, onSnapshot, doc, Unsubscribe, addDoc, collection, setDoc } from "firebase/firestore"
import { computed, reactive, watch, watchEffect } from "vue"
import { config } from "./config"

const app = initializeApp({
  apiKey: "AIzaSyDlAUfPJ6T-xQMJcsbAT3SW7zFSFxDQZh4",
  authDomain: "fib-random.firebaseapp.com",
  projectId: "fib-random",
  storageBucket: "fib-random.appspot.com",
  messagingSenderId: "724579742971",
  appId: "1:724579742971:web:7b8e2259a4d585b9be6c5e"
})

const db = getFirestore()

export type User = {
  estimate?: string
  ready: boolean
  viewOnly?: boolean
}

type State = {
  users: {
    [user: string]: User
  }
  settings: {
    admin: string
    options: string[]
    openSettings: boolean
  }
}

export const addSession = async (): Promise<string> => {
  const state: State = {
    users: {},
    settings: {
      admin: config.name,
      options: ['1','2','3','5','8','13','21'],
      openSettings: false
    }
  }
  const ref = await addDoc(collection(db, 'sessions'), state)
  return ref.id
}

export const session = reactive({
  loading: true,
  id: window.location.hash.slice(1),
  active: false,
  state: undefined as undefined | State
})

export const activeUsers = computed(() => 
  Object.fromEntries(Object.entries(session.state?.users || {}).filter(([,{ viewOnly }]) => !viewOnly))
)
export const viewingUsers = computed(() => 
  Object.fromEntries(Object.entries(session.state?.users || {}).filter(([,{ viewOnly }]) => viewOnly))
)
export const orderedActiveUsers = computed(() => Object.keys(activeUsers.value).sort())
export const orderedViewingUsers = computed(() => Object.keys(viewingUsers.value).sort())
export const allReady = computed(() => 
  Object.values(activeUsers.value).every(({ready}) => ready)
)
export const user = computed(() => session.state?.users[config.name])

let unsubscribe: Unsubscribe
watch(() => [session.id, config.name], ([id, name]) => {
  if(!name || !id) {
    session.loading = false
    return
  }
  unsubscribe?.()
  unsubscribe = onSnapshot(doc(db, `sessions/${id}`), (snapshot) => {
    session.active = snapshot.exists()
    session.state = snapshot.data() as any
    session.loading = false
  })
}, { immediate: true })

export const updateUserState = async (name: string, user: Partial<User>) => {
  await setDoc(doc(db, `sessions/${session.id}`), { 
    users: {
      [name]: user
    }
  }, { merge: true }) 
}

export const updateState = async (settings: Partial<State['settings']>) => {
  await setDoc(doc(db, `sessions/${session.id}`), { settings }, { merge: true }) 
}

watch(() => [session.state?.users, config.name], ([users, name]) => {
  if(!users || typeof users === 'string') return
  if(!name || typeof name !== 'string') return
  if(!users[name]) {
    updateUserState(name, { ready: false, estimate: '' + ~~(Math.random() * 100) })
  }
})

window.addEventListener('hashchange', () => {
  session.id = window.location.hash.slice(1)
})

Object.assign(window, {session})
