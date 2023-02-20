import myAxios, { AxiosResponseType } from "@/api"

interface ITestData {
  name: string
}

/** 获取test数据 */
export const getTestDataObs = (data: ITestData): AxiosResponseType => {
  return myAxios({
    url: "/test1",
    params: {
      name: data.name,
    },
  })
}
