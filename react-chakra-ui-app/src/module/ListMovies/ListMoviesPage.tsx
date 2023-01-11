import { Fragment, useEffect, useState } from "react";
import Header from "../../component/features/header/Header";
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../services/Firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import ListMovie from "./ListMovie";
import { useCallback } from "react";
import { Button, Container } from "@chakra-ui/react";

const ListMoviesPage = () => {
    const db = getFirestore(firebaseApp());

    const [movies, setMovies]: any[] = useState([]);
    let totalMovies: number = movies.lenght;

    const findAllMovies = useCallback(async () => {
        const newMovies: any[] = [];
        const FirebaseMovies = await getDocs(collection(db, "Films"));

        FirebaseMovies.forEach(movie => {
            setMovies()
            newMovies.push(movie.data());
        })
        setMovies(newMovies);
    }, []);


    useEffect(() => {
        findAllMovies();

    }, [findAllMovies]);

    return (
        <Fragment>
            <Header></Header>
            <Container pt={5} maxW='container.xl'>
                <Button onClick={findAllMovies}>Refresh list</Button>
                <ListMovie movies={movies} totalMovies={totalMovies}></ListMovie>
            </Container>
        </Fragment>
    )
}

export default ListMoviesPage;