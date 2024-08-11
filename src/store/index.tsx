import { create } from "zustand";

interface FormData {
    name: string;
    position: string;
    company: string;
    url: string;
}

interface StoreState {
    formData: FormData;
    setFormData: (formData: FormData) => void;
    isMailGenerated: boolean;
    setIsMailGenerated: (isMailGenerated:boolean)=>void;
    sentToHR:boolean;
    setSentToHR: (sentToHR:boolean)=>void;

}

const useStore = create<StoreState>((set) => ({
    formData: {
        name: '',
        position: '',
        company: '',
        url: '',
    },
    setFormData: (formData: FormData) => set(state => ({
        formData: {
            ...state.formData,
            ...formData
        }
    })),
   
    isMailGenerated:false,
    setIsMailGenerated:(isMailGenerated)=>set(()=>({
        isMailGenerated: isMailGenerated
    })),
    sentToHR:false,
    setSentToHR:(sentToHR)=>set(()=>({
        sentToHR: sentToHR
    }))
}));


export { useStore, FormData };
