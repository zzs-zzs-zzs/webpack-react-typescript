import myAxios from "@/api"
import { AxiosResponseType } from "../interface"

interface ITestData {
  name: string
}

/** 获取test数据 */
export const getTestDataObs = (data: ITestData): AxiosResponseType => {
  return myAxios({
    url: "/test1",
    method: "get",
    params: {
      name: data.name,
    },
  })
}
