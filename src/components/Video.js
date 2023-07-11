function Video({video_key}) {
    
    return (
        <>
         <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className="card">
                <iframe style={{width:2000, height:600}}
                    src={`https://www.youtube.com/embed/${video_key}`}>
                </iframe>             
            </div>
        </div>
         
        </>
       

    )
}
export default Video;