import React from 'react'

// @material-ui/core components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

// core components
import { GridContainer, GridItem } from '../../components/Grid'
import { container, title } from '../../../assets/ts/nextjs-material-kit'

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Schedule from '@material-ui/icons/Schedule'
import List from '@material-ui/icons/List'
import Favorite from '@material-ui/icons/Favorite'
import WorkIcon from '@material-ui/icons/Work'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import SchoolIcon from '@material-ui/icons/School'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

import AppBar from '@material-ui/core/AppBar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      padding: '70px 0'
    },
    container,
    title: {
      ...title,
      marginTop: '30px',
      minHeight: '32px',
      textDecoration: 'none'
    },
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
    },
    boolet: {
      paddingLeft: 40,
      paddingTop: 20,
      paddingBottom: 20
    },
    body: {
      paddingTop: 20,
      paddingBottom: 20
    },
    h1: {
      paddingBottom: 20
    }
  })
)

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

export const SectionProgram = function SectionProgram() {
  const classes = useStyles()

  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.section} id="Programa">
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h1>Programa de Actividades</h1>
          </div>
          <div className={classes.title}>
            <Typography variant="subtitle1">
              O nosso programa para o mandato do 2020/2024 sustenta-se em cinco
              pilares, nomeadamente:
            </Typography>
          </div>

          <div>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab
                  label="Profissionalização"
                  {...a11yProps(0)}
                  icon={<WorkIcon />}
                ></Tab>
                <Tab
                  label="Empoderamento"
                  {...a11yProps(1)}
                  icon={<AccountBalanceIcon />}
                />
                <Tab
                  label="Massificação"
                  {...a11yProps(2)}
                  icon={<GroupAddIcon />}
                />
                <Tab label="Formação" {...a11yProps(3)} icon={<SchoolIcon />} />
                <Tab
                  label="Administração"
                  {...a11yProps(4)}
                  icon={<CloudUploadIcon />}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Typography variant="h6" className={classes.h1}>
                Profissionalização do Xadrez de alta competição
              </Typography>

              <Typography variant="body1" className={classes.body}>
                O xadrez tem um grande potencial como um produto comercialmente
                viável. Tem-se atrasado neste desenvolvimento porque até à data
                ainda não foi traçada como prioridade a modernização e
                profissionalização da modalidade. A actual candidatura
                compreende por que razão a profissionalização do xadrez é
                essencial e imprescindível para o aumento dos níveis de
                competitividade da modalidade em Moçambique. Por isso, para além
                de criar dentro da sua estrutura organizacional um departamento
                de projectos e negócios, criando mecanismos que tornem o xadrez
                uma profissão apetecível tal como o futebol e outras modalidades
                profissionais ou de alto rendimento, vai:
              </Typography>

              <Typography className={classes.body}>
                <ul className={classes.boolet}>
                  <li>
                    Aumentar os valor monetário dos prémios por campeonato
                    regionais e Nacionais
                  </li>
                  <li>
                    Negociar com empresas nacionais e as multinacionais para
                    patrocinarem os campeonatos nacionais
                  </li>
                  <li>
                    Negociar com os clubes desportivos a aceitarem núcleos de
                    xadrez nos seus clubes
                  </li>
                  <li>
                    Conceder um subsídio mensal aos jogadores da selecção
                    nacional
                  </li>
                  <li>
                    Concorrer a organização de Campeonatos africanos financiados
                    pela FIDE{' '}
                  </li>
                  <li>
                    Garantir a participação dos melhores atletas da nação em
                    campeonatos pré-selecionados pela FMX
                  </li>
                </ul>
              </Typography>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Typography variant="h6" className={classes.h1}>
                Empoderamento das Associações Provinciais através da criação de
                fortes Parcerias Público-Privadas
              </Typography>

              <Typography variant="body1" className={classes.body}>
                <p>
                  É de grande importância para esta candidatura, promover a
                  legalizacao das Associações de Xadrez a nível Nacional (o
                  reconhecimento governamental-autorização dos Governos
                  Provinciais e a publicação dos Estatutos) bem como a autonomia
                  financeira das mesmas, pois elas são o garante de uma grande
                  massificação e divulgação da modalidade. Entretanto, é
                  necessário que exista proximidade das associações à FMX para
                  identificar problemas e responsavelmente adequar medidas
                  solucionar tais carências.
                </p>
                <p>
                  No primeiro ano do nosso mandato pretendemos prestar todo o
                  auxílio necessário para que as associações sejam bem-sucedidas
                  ao longo dos quatro anos do mandato, prestando um apoio
                  profissional e incondicional na execução das suas atividades.
                </p>
                <p>
                  Nesta ordem de ideias, comprometemo-nos a desenvolver as
                  seguintes actividades com as associações por forma a torná-las
                  independentes e autónomas:
                </p>
              </Typography>

              <Typography className={classes.body}>
                <ul className={classes.boolet}>
                  <li>Reunir periodicamente com as associações</li>
                  <li>
                    Contribuir no desenho de projectos desportivos financiáveis
                  </li>
                  <li>
                    Prestar formações em Marketing, empreendedorismo desportivo
                    e comunicação com parceiros para membros das associações
                  </li>
                  <li>Ajudar na divulgação de eventos das associações</li>
                  <li>
                    Garantir a manutenção da base de dados das associações
                  </li>
                  <li>
                    Incentivar as criação de associações distritais e municipais
                    de xadrez
                  </li>
                  <li>Apresentar trimestralmente uma agenda de atividades</li>
                  <li>
                    Ajudar as associações na promoção de torneios
                    interdistritais e municipais
                  </li>
                  <li>Promover a gestão de festivais escolares de xadrez</li>
                  <li>
                    Reforçar a coordenação institucional entre as associações
                    provinciais de xadrez e os respectivos governos provinciais
                  </li>
                  <li>
                    Encontrar um patrocinador financeiro local para as
                    associacoes provinciais de xadrez
                  </li>
                  <li>
                    Criação de representantes regionais para poder dar vasão as
                    actividades por zona
                  </li>
                </ul>
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography variant="h6" className={classes.h1}>
                DIVULGAÇÃO E MASSIFICAÇÃO DO XADREZ
              </Typography>

              <Typography variant="body1" className={classes.body}>
                <p>
                  Iremos intensificar a massificação e divulgação do xadrez
                  através:
                </p>
              </Typography>

              <Typography variant="h6" className={classes.body}>
                a) Da implantação de xadrez nas escolas e comunidades
              </Typography>

              <Typography className={classes.body}>
                <ul className={classes.boolet}>
                  <li>
                    A implantação e desenvolvimento do xadrez nas escolas será
                    uma das maiores prioridades da nossa Direcção
                  </li>
                  <li>
                    A FMX, sob a direccao desta candidatura, vai desenvolver um
                    programa específico em colaboração com o Ministério de
                    Educação e Desenvolvimento Humano para levar o xadrez a
                    todas escolas do país e melhorar qualidade dos Festivais
                    Desportivos Escolares no que se refere ao xadrez, desde os
                    níveis distritais até ao nacional
                  </li>
                  <li>
                    Será também criada uma Comissão para o Desenvolvimento do
                    Xadrez Escolar, onde serão convidadas e integradas algumas
                    personalidades influentes e de reconhecido mérito no âmbito
                    da Educação/Pedagogia, visando tornar conhecidos o valor
                    pedagógico do xadrez e influenciar o Governo a introduzir o
                    xadrez no curriculum escolar
                  </li>
                  <li>
                    Será criada uma gala anual de xadrez onde permitirá garantir
                    maior visibilidade as nossas figuras do ano.
                  </li>
                </ul>
              </Typography>

              <Typography variant="h6" className={classes.body}>
                b) Da distribuição de material de xadrez às Associações
                Provinciais
              </Typography>

              <Typography className={classes.body}>
                <ul className={classes.boolet}>
                  <li>
                    Pretende-se fazer maior aquisição material de Xadrez atravez
                    de parcerias nacionais e internacionais
                  </li>
                  <li>
                    Aventar a possibilidade de implantação de uma fábrica de
                    tabuleiros de xadrez a partir de parcerias nacionais
                    possibilitando que o custo dos mesmos sejam os mais baixos
                    possíveis
                  </li>
                  <li>
                    A partir da mesma fábrica poderá ser vendido material aos
                    ministérios e outras instituições o que permitirá ter
                    retorno que ajudará na massidicação
                  </li>
                </ul>
              </Typography>

              <Typography variant="h6" className={classes.body}>
                c) Da Iniciação
              </Typography>

              <Typography className={classes.body}>
                <ul className={classes.boolet}>
                  <li>
                    Reintrodução dos Campeonatos Nacionais de Escalões
                    inferiores (infantil e juvenil)
                  </li>
                  <li>Organização de torneios usando plataformas digitais</li>
                  <li>
                    Participar da organização de festivais escolares em parceria
                    com o Ministério de Educação e Desenvolvimento Humano, e
                    recreativos.
                  </li>
                </ul>
              </Typography>

              <Typography variant="h6" className={classes.body}>
                d) Da realização regular e efectiva de torneios oficiais
                nacionais ao longo de todo o mandato, tais como:
              </Typography>

              <Typography className={classes.body}>
                <ul className={classes.boolet}>
                  <li>
                    Campeonatos nacionais em todas as categorias (Nampula;
                    Inhambane;Niassa;Tete; Gaza; Beira; Chimoio; Maputo)
                  </li>
                  <li>
                    Campeonatos nacionais de .... (mimos? Femininos?).em
                    Vilankulos
                  </li>
                  <li>
                    Campeonato Nacional por clubes na Matola (primeiro ano do
                    mandato)
                  </li>
                </ul>
              </Typography>

              <Typography variant="h6" className={classes.body}>
                e) Da participação em torneios internacionais:
              </Typography>

              <Typography className={classes.body}>
                <ul className={classes.boolet}>
                  <li></li>
                </ul>
              </Typography>

              <Typography variant="h6" className={classes.body}>
                f) Da divulgacao do xadrez
              </Typography>

              <Typography className={classes.body}>
                <ul className={classes.boolet}>
                  <li>
                    Propomo-nos tirar o xadrez do anonimato, criando parcerias
                    com a Comunicação Social
                  </li>
                  <li>
                    Abrir umWeb Site da FMX e uma Página no Facebook para
                    divulgação dos eventos que forem a acontecer a nível das
                    províncias
                  </li>
                  <li>
                    Organizar a feiras e festivais de xadrez ao longo do ano e
                    principalmente na semana internacional de xadrez
                  </li>
                  <li>Realizar exposição de Fotografias</li>
                  <li>Criar um Jornal/revista trimestral de xadrez</li>
                  <li>Introdução de campeonato de veteranos</li>
                </ul>
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Typography variant="body1" className={classes.body}>
                <p>
                  A implementação deste plano proporcionará aos promotores de
                  xadrez a nível das províncias a possibilidade de reforçar o
                  seu conhecimento e formarem-se nas áreas de arbitragem ou
                  treinamento.
                </p>
                <p>Neste sentido, a candidatura compromete-se a:</p>
              </Typography>

              <Typography className={classes.body}>
                <ul className={classes.boolet}>
                  <li>
                    Dar formações anuais de árbitros e formadores de xadrez a
                    nível nacional
                  </li>
                  <li>
                    Assegurar a participação de membros das associações
                    escolhidos pela FMX (critérios a definir em negociação com
                    as Associações) em cursos de árbitros e treinadores
                  </li>
                </ul>
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Typography variant="h4" className={classes.h1}>
                Administração participativa e transparente
              </Typography>

              <Typography variant="body1" className={classes.body}>
                <p>A massificação e divulgação do xadrez passará por:</p>
              </Typography>

              <Typography variant="h6" className={classes.body}>
                a) Gestão financeira e Transparência:
              </Typography>

              <Typography className={classes.body}>
                <p className={classes.boolet}>
                  A bandeira desta candidatura será garantir gestão
                  participativa e uma transparência absoluta de todos os actos
                  da FMX. Desta forma, iremos pautar por uma gestão transparente
                  e responsável baseada num sistema de comunicação eficiente,
                  permitindo auditoria e prestação de contas periódicas perante
                  as associações e publicação da prestação de contas no jornal
                  de maior circulação nacional e outros meios. Criação de um
                  departamento de negócios que irá ajudar no funcionamento e no
                  pagamento das contas existentes.
                </p>
              </Typography>

              <Typography variant="h6" className={classes.body}>
                b) Valorização da sede da FMX e anexos
              </Typography>

              <Typography className={classes.body}>
                <p className={classes.boolet}>
                  A Sede da FMX deve transmitir uma imagem digna e atrativa,
                  para tal estamos prontos para apresentar as seguintes
                  propostas:
                </p>
                <ul className={classes.boolet}>
                  <li>
                    Instalar uma Biblioteca de Xadrez na FMX, com livros,
                    computadores e Internet
                  </li>
                  <li>
                    Apetrechar a sala de Jogos com material de Xadrez disponível
                    24/24h
                  </li>
                  <li>
                    Apetrechar em mobiliário de escritório, instalação de meios
                    de comunicação e pessoal administrativo
                  </li>
                  <li>
                    Melhorar a qualidade da prestação dos serviços sociais aos
                    xadrezistas pelo Centro Social
                  </li>
                  <li>Melhorar as instalações do Centro Social</li>
                </ul>
              </Typography>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  )
}
