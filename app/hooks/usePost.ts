import  axios  from "axios"
import { useMutation, useQueryClient } from "react-query"

const postData = async <T>(url: string, data:any) => {
    const response = await axios.post(url, data)
    return response.data
}

export default function usePostMutation<T = unknown>(url: string) {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: (data: any) => postData<T>(url, data),
        onSuccess: () => {
            queryClient.invalidateQueries(['fetch-data', url])
        }
    })
    return mutate
}