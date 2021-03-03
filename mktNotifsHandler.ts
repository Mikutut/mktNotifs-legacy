import { Ref, ref } from "vue";

type PopUpType = "info" | "warn" | "error" | "success";

interface PopUpData {
  id: number;
  title: string;
  description: string;
  type?: PopUpType;
  showIcon?: boolean;
}

const popUps: Ref<Array<PopUpData>> = ref([]);
let id = 0;

const addPopUp = (popUpData: PopUpData) => {
  const title = popUpData.title;
  const description = popUpData.description;
  const type = popUpData.type ? popUpData.type : "info";
  const showIcon = popUpData.showIcon ? popUpData.showIcon : false;
  popUps.value.push({
    id,
    title,
    description,
    type,
    showIcon
  });
  const tempId = id;
  setTimeout(() => { 
    popUps.value.splice(popUps.value.indexOf(popUps.value.find((v: PopUpData) => v.id === tempId) as PopUpData), 1);
    if(popUps.value.length === 0) id = 0;
  }, 5000);
  id++;
};

export {
  popUps,
  addPopUp
};