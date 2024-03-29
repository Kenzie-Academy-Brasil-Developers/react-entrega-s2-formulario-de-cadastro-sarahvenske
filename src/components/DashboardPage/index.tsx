import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext";
import { TechContext } from "../../context/TechContext";
import { MdDelete } from "react-icons/md"

import Container from "./style";
import Logo from "../Logo";
import TechForm from "../TechForm";
import Modal from "../Modal";

const DashboardPage = () => {

    const { user, userLogout } = useContext(UserContext);
    const { removeTech } = useContext(TechContext)

    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = (e) => {
        e.preventDefault()
        setIsOpenModal(false)
    }

    return(
            <Container>
                <header>
                    <div className="divHeader">
                        <Logo/>
                        <button onClick={userLogout}>Sair</button>
                    </div>
                </header>
                <main>
                    <section className="firstSection">
                        <div>
                            <h2>Olá, {user.name}</h2>
                            <p>{user.course_module}</p>
                        </div>
                    </section>
                    <section className="techSection">
                        {isOpenModal && (
                            <Modal>
                                <TechForm closeModal = {closeModal}/>
                            </Modal>
                        )}
                        <div className="techBox">
                            <div className="techTitle">
                                <h3>Tecnologias</h3>
                                <button onClick={openModal}>+</button>
                            </div>
                            <div className="techList">
                                <ul>
                                    {user.techs.map((tech) => 
                                        <li key={tech.id}>
                                            <h3>{tech.title}</h3>
                                            <div className="divClose">
                                                <p>{tech.status}</p>
                                                <button onClick={() => removeTech(tech)}><MdDelete/></button>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </Container>
    )
}

export default DashboardPage;

