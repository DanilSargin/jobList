import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {useJobsList} from "../hocs/useJobsList";
import {useEffect} from "react";

const JobsListPage = () => {

    const {loading, list} = useJobsList()

    const nav = useNavigate()

    console.log(list)

    return (
        <div className={'space-y-5 pl-20 pr-20'}>
            {list.map((item) => (
                <div className={'w-96 bg-white shadow rounded p-2'}>
                    <Link to={`/job/${item.id}`}>
                        <p className={'my-5'}>{item.title}</p>
                    </Link>

                </div>
            ))}
        </div>
    )
}

export default JobsListPage