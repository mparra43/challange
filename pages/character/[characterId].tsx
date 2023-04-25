import { useRouter } from 'next/router'
import { Navbar } from '../../features/tranversal'
import { useFetch } from '../../hooks/useFetch'
import moment from 'moment/moment';
import { Console } from 'console';


export default function CommentPage() {
    const router = useRouter()

    const id = router.query.characterId
    const { data, isLoading, hasError, getFetch } = useFetch({ endpoint: `character/${id}`, method: 'GET' })

    return (
        <div className="home">
            <Navbar />
            <div className="container mt-2">
                {data &&
                    <div className="row mt-5">
                        <div className="col-4">
                            <img
                                src={data.data.imageUrl}
                                alt={data.data.name}
                                className="img-thumbnail animate__animated animate__fadeInLeft"
                            />
                        </div>
                        <div className="col-8 animate__animated animate__fadeIn">
                            <h3> {data.data.name} </h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Fecha de creación: </b> {moment(data.data.createdA).format("YYYY-MM-DD")}</li>
                            </ul>

                            <h5>Peliculas</h5>
                            <ul className="list-group list-group-flush">
                                {data?.data?.films?.length > 0 ?
                                    data?.data?.films.map((e: string) => {
                                        <li className="list-group-item">{e}</li>
                                    }) :
                                    <p> No hay registros</p>
                            }
                            </ul>
                            <h5>Shows de televisión</h5>
                            <ul className="list-group list-group-flush">
                            {console.log(data?.data?.tvShows.length  >= 1 )}
                                {data?.data?.tvShows?.length >= 1 ?
                                    data?.data?.tvShows.map((e: string) => {
                                        <li className="list-group-item">{e}</li>
                                    }) :
                                    <p> No hay registros</p>
                            }
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}