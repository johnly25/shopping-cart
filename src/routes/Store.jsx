import { useRouteLoaderData } from "react-router-dom";
import CardList from "../components/CardList/CardList";

function Store() {
    const data = useRouteLoaderData('root');
    return (
        <>
            {<CardList data={data} />}
        </>
    );
}

export default Store;