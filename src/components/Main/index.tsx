import React from "react";
import PData from "../PData";
import {Address, Column, Contacts, Divider, PersonalData, Row} from "./styles";
import {FaGithub, FaPencilAlt, FaReact, FaWhatsapp} from "react-icons/fa";
import {SiFlutter, SiGmail, SiMicrosoftexcel, SiSpring} from "react-icons/si";

const Main: React.FC = () => {
    return (
        <PersonalData>
            <fieldset>
                <h2>Dados Pessoais</h2>
                <hr/>
                <PData title="Data de Nascimento" text="29/05/1999"/>
                <Address>
                    <PData title="Endereço" text="Rua A, 94"/>
                    <PData title="Bairro" text="Belo Horizonte"/>
                    <PData title="Cidade" text="Buritizeiro - MG"/>
                    <PData title="CEP" text="39.280-000"/>
                </Address>
                <Divider/>
                <h3>
                    Contatos
                    <hr/>
                </h3>
                <Contacts>
        <span>
        <FaWhatsapp/>
        (38) 99243-3719
        </span>
                    <span>
        <SiGmail/>
        leosgv.sv@gmail.com
        </span>
                    <span>
          <FaGithub/>
          github.com/samuelg4133
          </span>
                </Contacts>
                <Divider/>
                <br/>
                <h3>
                    Conhecimentos
                    <hr/>
                </h3>
                <Row>
                    <Column>
                        <h4>Frameworks</h4>
                        <Row>
          <span>
            <SiFlutter/>
            Flutter
          </span>
                            <span>
            <FaReact/>
            React
          </span>
                            <span>
            <SiSpring/> Spring
          </span>
                        </Row>
                    </Column>
                    <Column>
                        <h4>
                            Outros Conhecimentos
                        </h4>
                        <Row>
          <span>
          <FaGithub/>
          Git
          </span>
                            <span>
            <FaPencilAlt/>
            CorelDRAW
          </span>
                            <span>
                                <SiMicrosoftexcel/>
                                Excel
                            </span>
                        </Row>
                    </Column>
                </Row>
                <Divider/>
                <h3>
                    Formação
                </h3>
                <hr/>
                <Row>
                    <Column>
                            <strong>
                                Técnico em Informática
                                </strong>
                        fev/2015 - jul/2016
                    </Column>
                    <Column>
                        <strong>
                            Sistemas de Informação
                        </strong>
                        jul/2017 - dez/2021*
                    </Column>
                </Row>
                <Divider/>
                <h3>
                    Experiência
                </h3>
                <hr/>
                <Row>
                    <Column>
                    <span>
                        Estagiário
                    <strong>
                     - AK Informática
                    </strong>
                        </span>
                        dez/2015 - fev/2016
                        <p>
                            Atendimento ao Público, Formatação de computadores,<br/>
                            Administração do Sistema ERP,<br/>
                            Manutenção e Formatação de Computadores.
                        </p>
                    </Column>

                    <Column>
                    <span>
                        Estagiário
                    <strong>
                     - Sicoob Sertão Minas
                    </strong>
                        </span>
                        ago/2018 - jan/2019
                        <p>
                            Atendimento ao Público, Criação de Artes Gráficas, <br/>
                            Criação de Relatórios com Excel,<br/>
                            Suporte Técnico para a máquina de cartões,
                            Consórcios, <br/>Consignado e Empréstimos.
                        </p>
                    </Column>
                </Row>
                <Column>
                     <span>
                        Agente de Atendimento
                    <strong>
                     - Sicoob Sertão Minas
                    </strong>
                        </span>
                    fev/2019 - atualmente
                    <p>
                        Atendimento ao Público, Criação de Artes Gráficas, <br/>
                        Criação de Relatórios com Excel,<br/>
                        Suporte Técnico para a máquina de cartões,
                        Consórcios, <br/>Consignado e Empréstimos,
                        Ministração de Palestras e Treinamentos, <br/>
                        Ajuda no TI,
                        Ajuda na Portaria.
                    </p>
                </Column>
            </fieldset>
        </PersonalData>
    );
};

export default Main;
