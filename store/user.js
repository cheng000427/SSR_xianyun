

export const state = () => ({
    userInof:{
        token:'',
        username:{}
    }
})

export const mutations ={
    setUserInof(state,data){
        state.userInof=data 
    },
    clearUserInof(state,data){
        state.userInof=""
    }
}

export const actions = () => ({

})