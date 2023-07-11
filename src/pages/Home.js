import { useEffect, useState } from "react";
import Cards from "../components/Cards";

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
                <div id="media_v4" className="media discover container">
                    <div className="column_wrapper ">
                        <div className="content_wrapper wrap">
                            <div className="title">
                                <h2>Welcome.</h2>
                                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                            </div>

                            <div className="search" style={{ width: '100%' }}>
                                <form id="inner_search_form" action="/search" method="get" accept-charset="utf-8">
                                    <label style={{ width: '80%' }}>
                                        <input dir="auto" name="query" type="text" spellcheck="false" placeholder="Search for a movie, tv show, person......" value="" />
                                    </label>
                                    <input type="submit" value="Search" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="container mt-3">
                <div className="nowshowing"><h3>NOW SHOWING</h3></div>
                <div className="row">
                    {

                        loading ? <h1 className="loading">Loading---</h1> : nowShowing.map(showing => (
                            <Cards poster_path={`https://image.tmdb.org/t/p/w440_and_h660_face/` + showing.poster_path} title={showing.title} release_date={showing.release_date} />
                        ))
                    }
                </div>
            </section>

            <section className="container mt-3">
                <div className="nowshowing"><h3>COMING SOON</h3></div>
                <div className="row">
                    {
                        comingSoon && comingSoon.map(coming => (
                            <Cards poster_path={`https://image.tmdb.org/t/p/w440_and_h660_face/` + coming.poster_path} title={coming.title} release_date={coming.release_date} />
                        ))
                    }

                </div>
            </section>


        </>
    )
}
export default Home;