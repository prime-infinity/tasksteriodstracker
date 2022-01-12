import { useSelector } from 'react-redux'

const NameHeader = () => {
    const menuState = useSelector((state) => state.menu.value)

    return(
        <div className="row mb-5 mt-5">
            <div className="col-9 offset-md-2 text-md-right">
                <span className="h3 font-weight-bold text-theme">Hi Osamede</span> <br />
                <span className="text-muted-native">{menuState} tasks are Pending</span>
            </div>
            <div className="col-3 col-md-1">
                <img className="border rounded-circle img-fluid-native" alt="profileImage" src="images/prime.jpeg" />
            </div>
        </div>
    )
}

export default NameHeader