import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import docter from '../assets/landing-slider-img.png'
import edit from '../assets/edit.jpg'
import joker from '../assets/joker.jpg'

function Home() {
    const [loading, setLoading] = useState(true)
    const [nowShowing, setNowShowing] = useState([])
    const [comingSoon, setComingSoon] = useState([])


    const getNowShowing = () => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2")
            .then(Response => Response.json())
            .then(Response => {
                setNowShowing(Response.results.slice(0, 6))
                setLoading(false)
            })

    }
    const getComingSoon = () => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")
            .then(Response => Response.json())
            .then(Response => {
                setComingSoon(Response.results.slice(0, 6))
                setLoading(false)
            })

    }


    useEffect(() => {
        getNowShowing()
        getComingSoon()
    }, [])


    return (
        <>
            <section className="inner_content new_index " >
                <div id="media_v4" className="media discover ">
                    <div className="column_wrapper ">
                        <div className="content_wrapper wrap">
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner ">
                                    <div className="carousel-item active">
                                        <img src={docter} alt="empty"style={{width:1510,objectFit:"cover"}}/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={edit} alt=".."style={{width:1510,objectFit:"cover"}}/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={joker} style={{width:1510,objectFit:"cover"}}/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="container mt-3">
                <div className="nowshowing"><h3>NOW SHOWING</h3></div>
                <div className="row">
                    {

                        loading ? <h1 className="loading">Loading...</h1> : nowShowing.map(showing => (
                            <Cards id={showing.id} poster_path={`https://image.tmdb.org/t/p/w440_and_h660_face/` + showing.poster_path} title={showing.title} release_date={showing.release_date} />
                        ))
                    }
                </div>
            </section>

            <section className="container mt-3">
                <div className="nowshowing"><h3>COMING SOON</h3></div>
                <div className="row">
                    {
                        comingSoon && comingSoon.map(coming => (
                            <Cards id={coming.id} poster_path={`https://image.tmdb.org/t/p/w440_and_h660_face/` + coming.poster_path} title={coming.title} release_date={coming.release_date} />
                        ))
                    }

                </div>
            </section>


        </>
    )
}
export default Home;