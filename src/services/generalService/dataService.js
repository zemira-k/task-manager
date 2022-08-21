import { Task, Contact } from "../../data/dummyData";
import { storageService } from "./storageService";

export const dataService = {
    initData,
    removeData
}

function initData() {
    storageService.newEntity("task", Task)
    storageService.newEntity("contact", Contact)
}

function removeData() {
    storageService.deleteStorage()
}