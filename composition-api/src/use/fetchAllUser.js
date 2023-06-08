import { ref } from "vue";
import userService from "../services/user-service";

export default function () {
  const userList = ref([]);
  const fetchAllUser = async () => {
    const res = await userService.get();
    // console.log(res);
    userList.value = [...res];
  };

  return { userList, fetchAllUser };
}
