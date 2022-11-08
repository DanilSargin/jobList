import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

type LocationType = {
    lat: number
    long: number
}

export type JobsListType = {
    address: string
    date: string
    benefits: Array<string>
    desc: string
    email: string
    employment_type: Array<string>
    id: string
    location: LocationType
    name: string
    phone: string
    picture: Array<string>
    salary: string
    title: string
}

export const useJobsList = () => {
    const [list, setList] = useState<Array<JobsListType>>([])
    const [loading, setLoading] = useState(true)



    const loadJobsList = () => {
        axios.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data', {
                params: {
                    access_token: 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
                }
            })
            .then((res: AxiosResponse<Array<JobsListType>>) => {
                setList(res.data)
                setLoading(false)
        })
    }

    useEffect(() => {
        if (loading) {
            loadJobsList()
        }
    })

    return {
        list,
        loading,
    }
}