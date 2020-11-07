

export const mutations = {
    SET_CURRENTTLY_LOGGED_USER(state: any, value: string): void {
        state.loggedUsername = value;
    },
    CHANGE_SHOW_BOX(state: any): void {
        state.showBox = !state.showBox;    
    }
}