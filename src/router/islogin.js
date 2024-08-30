import { ref } from "vue"
import router from "."

const isLogin = ref(false)

export function useAuth(){
    
    const login = () => {
        isLogin.value = true;
        // router.push({name:'About'})
    }

    const logout = () => {
        isLogin.value = false;
    }

    return { isLogin, login, logout }
}

