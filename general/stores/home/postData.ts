import { defineStore } from "pinia";
import { Data } from "../../../functions";

interface IPostData {
    imgForComputer: string;
    imgForMobile: string;
    date: string;
    title: string;
    content: string;
}

interface State {
    postData: IPostData | null;
}

const usePostData = defineStore("postData", {
    state: () => ({
        postData: null
    } as State),
    actions: {
        async getPostData() {
            const data = await Data.getData<IPostData>("/home/postData", "json");

            if ( data instanceof Object ) this.postData = data;
        }
    }
});

export default usePostData;