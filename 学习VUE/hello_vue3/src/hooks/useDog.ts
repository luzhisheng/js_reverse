import { reactive } from 'vue'
import axios from 'axios'

export const dogList = reactive([
    'https://images.dog.ceo/breeds/spaniel-irish/n02102973_2902.jpg'
])

export async function changeImg() {
    try {
        const res = await axios.get("https://dog.ceo/api/breeds/image/random")
        dogList.push(res.data.message)
    } catch (e) {
        alert(e)
    }
}