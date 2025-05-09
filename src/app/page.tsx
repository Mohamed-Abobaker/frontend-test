import verifications from "../verifications.json";

export default function Home() {

    return (
        <div>
            <h1>Verifications</h1>
            <p>Number of verifications: {verifications.totalElements}</p>
        </div>
    );
}
