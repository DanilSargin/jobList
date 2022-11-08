import {JobsListType, useJobsList} from "./useJobsList";
import {useEffect, useState} from "react";

export const useJob = (id: string) => {
    const {list} = useJobsList()

    const [job, setState] = useState<JobsListType>()

    useEffect(() => {
        if (list.length > 0 && id) {
            setState(list.find((item) => item.id === id) as JobsListType)
        }
    })

    return {
        job
    }
}