
export default function Form({children,submitHnadler = null,errMsg=''}){

    function onSubmitHandler(e){
        e.preventDefault();
        if(submitHnadler){
            submitHnadler(e)
        }
    }

    return(
        <form className="d-flex flex-column gap-1 w-100 px-5 py-2" onSubmit={onSubmitHandler}>
            {children}
            <div className="text-center mt-4">
                <button className="btn btn-primary w-25 " type="submit">Submit</button>
            </div>
            {errMsg && <div className="alert alert-danger mt-2">{errMsg}</div> || null}
        </form>
    )
}