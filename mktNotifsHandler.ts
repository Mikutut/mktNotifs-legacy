import { Ref, ref } from "vue";

type PopUpType = "info" | "warn" | "error" | "success";

interface PopUpData {
  id: number;
  title: string;
  description: string;
  type: PopUpType;
  duration: number;
  showIcon: boolean;
}
interface PopUpOptions {
  title: string;
  description: string;
  type?: PopUpType;
  duration?: number;
  showIcon?: boolean;
}

const popUps: Ref<Array<PopUpData>> = ref([]);
let id = 0;

const addPopUp = (popUpData: PopUpOptions) => {
  const title = popUpData.title;
  const description = popUpData.description;
  const type = popUpData.type ? popUpData.type : "info";
  const duration = popUpData.duration ? popUpData.duration : 5000;
  const showIcon = popUpData.showIcon ? popUpData.showIcon : false;
  popUps.value.push({
    id,
    title,
    description,
    type,
    duration,
    showIcon
  });
  const tempId = id;
  setTimeout(() => { 
    popUps.value.splice(popUps.value.indexOf(popUps.value.find((v: PopUpData) => v.id === tempId) as PopUpData), 1);
    if(popUps.value.length === 0) id = 0;
  }, duration);
  id++;
};

export {
  popUps,
  addPopUp
};