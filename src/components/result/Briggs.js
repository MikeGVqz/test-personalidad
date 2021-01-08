import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import {
  ISTJ,
  ISFJ,
  INFJ,
  INTJ,
  ISTP,
  ISFP,
  INFP,
  INTP,
  ESTP,
  ESFP,
  ENFP,
  ENTP,
  ESTJ,
  ESFJ,
  ENFJ,
  ENTJ
} from '../definitions/BriggsDef'

class Briggs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showISTJ: false,
      showISFJ: false,
      showINFJ: false,
      showINTJ: false,
      showISTP: false,
      showISFP: false,
      showINFP: false,
      showINTP: false,
      showESTP: false,
      showESFP: false,
      showENFP: false,
      showENTP: false,
      showESTJ: false,
      showESFJ: false,
      showENFJ: false,
      showENTJ: false
    }
    this.onISTJ_click = this.onISTJ_click.bind(this)
    this.onISFJ_click = this.onISFJ_click.bind(this)
    this.onINFJ_click = this.onINFJ_click.bind(this)
    this.onINTJ_click = this.onINTJ_click.bind(this)
    this.onISTP_click = this.onISTP_click.bind(this)
    this.onISFP_click = this.onISFP_click.bind(this)
    this.onINFP_click = this.onINFP_click.bind(this)
    this.onINTP_click = this.onINTP_click.bind(this)
    this.onESTP_click = this.onESTP_click.bind(this)
    this.onESFP_click = this.onESFP_click.bind(this)
    this.onENFP_click = this.onENFP_click.bind(this)
    this.onENTP_click = this.onENTP_click.bind(this)
    this.onESTJ_click = this.onESTJ_click.bind(this)
    this.onESFJ_click = this.onESFJ_click.bind(this)
    this.onENFJ_click = this.onENFJ_click.bind(this)
    this.onENTJ_click = this.onENTJ_click.bind(this)
  }

  renderISTJ() {
    return (
      <ISTJ
        title={'Introvertido | Sensible | Pensante | Juez'}
        content={`El Inspector.
                Tiendes a ser practico y lógico sobre todo.
                Deberías considerar un trabajo en contadodría o ingeniería.`}
        onBackClick={this.onISTJ_click}
      />
    )
  }

  renderISFJ() {
    return (
      <ISFJ
        title={'Introvertido | Sensible | Sentimental | Juez'}
        content={`el Protector.
                  Tiendes a ser simpatico y organizado sobre todo.
                  Deberías considerar un trabajo para cuidar niños o en librerías.`}
        onBackClick={this.onISFJ_click}
      />
    )
  }

  renderINFJ() {
    return (
      <INFJ
        title={'Introverido | iNtuitivo | Sentimental | Juez'}
        content={`El Consejero.
               Tiendes a ser sensible y creativo sobre todo.
                Deberías considerar un trabajo en educación o en artes.`}
        onBackClick={this.onINFJ_click}
      />
    )
  }

  renderINTJ() {
    return (
      <INTJ
        title={'Introvertido | iNtuitive | Pensante | Juez'}
        content={`La Mente Maestra.
                      Tiendes a ser decisivo y perspicaz sobre todo.
                      Deberías considerar un trabajo en arquitectura o en ingeniería.`}
        onBackClick={this.onINTJ_click}
      />
    )
  }

  renderISTP() {
    return (
      <ISTP
        title={'Introvertido | Sensible | Pensante | Perceptivo'}
        content={`El Operador.
                  Tiendes a ser análitico y práctico sobre todo.
                  Deberías considerar un trabajo en informática o en agricultura.`}
        onBackClick={this.onISTP_click}
      />
    )
  }

  renderISFP() {
    return (
      <ISFP
        title={'Introvertido | Sensible | Sentimental | Perceptivo'}
        content={`El Compositor.
                  Tiendes a ser leal y adaptable sobre todo.
                  Deberías considerar un trabajo enseñando o en enfermería.`}
        onBackClick={this.onISFP_click}
      />
    )
  }

  renderINFP() {
    return (
      <INFP
        title={'Introvertido | iNtuitivo | Sentimental | Perceptivo'}
        content={`El Sanador.
                 Tiendes a ser empatico y curioso sobre todo.
                  Deberías considerar un trabajo de escritor o en diseño gráfico`}
        onBackClick={this.onINFP_click}
      />
    )
  }

  renderINTP() {
    return (
      <INTP
        title={'Introvertido | iNtuitivo | Pensante | Perceptivo'}
        content={`El Arquitecto.
                  Tiendes a ser curioso y analitico sobre todo.
                  Deberías considerar un trabajo en arquitectura o en construcción.`}
        onBackClick={this.onINTP_click}
      />
    )
  }

  renderESTP() {
    return (
      <ESTP
        title={'Extrovertido | Sensible | Pensante | Perceptivo'}
        content={`El Promotor.
                  Tiendes a ser energetico y realista sobre todo.
                  Deberías considerar un trabajo en ventas o de guardabosques.`}
        onBackClick={this.onESTP_click}
      />
    )
  }

  renderESFP() {
    return (
      <ESFP
        title={'Extrovertido | Sensible | Sentimental | Perceptivo'}
        content={`El Intérprete.
                 Tiendes a ser cuidadoso e ingenioso sobre todo.
                  Deberías considerar un trabajo en hospitalidad o en cuidado de la salud.`}
        onBackClick={this.onESFP_click}
      />
    )
  }

  renderENFP() {
    return (
      <ENFP
        title={'Extrovertido | iNtuitivo | Sentimental | Perceptivo'}
        content={`El Campeón.
                  Tiendes a ser imaginativo y perspicaz sobre todo.
                  Deberías considerar un trabajo en terapía o en artes.`}
        onBackClick={this.onENFP_click}
      />
    )
  }

  renderENTP() {
    return (
      <ENTP
        title={'Extrovertido | iNtuitivo | Pensante | Perceptivo'}
        content={`El Inventor.
                  Tiendes a ser entusiasta y teorico sobre todo.
                  Deberías considerar un trabajo en negocios o en deportes.`}
        onBackClick={this.onENTP_click}
      />
    )
  }

  renderESTJ() {
    return (
      <ESTJ
        title={'Extrovertido | Sensible | Pensante | Juez'}
        content={`El Supervisor.
                  Tiendes a ser lógico y asertivo sobre todo.
                  Deberías considerar un trabajo en liderazgo o en leyes.`}
        onBackClick={this.onESTJ_click}
      />
    )
  }

  renderESFJ() {
    return (
      <ESFJ
        title={'Extrovertido | Sensible | Sentimental | Juez'}
        content={`El Proveedor.
                  Tiendes a ser sociable y atento sobre todo.
                  Deberías considerar un trabajo en cuidado de niños o en cuidado de la salud.`}
        onBackClick={this.onESFJ_click}
      />
    )
  }

  renderENFJ() {
    return (
      <ENFJ
        title={'Extrovertido | iNtuitivo | Sentimental | Juez'}
        content={`El Maestro.
                 Tiendes a ser pasionado e imaginatico sobre todo.
                 Deberías considerar un trabajo de maestro o en artes.`}
        onBackClick={this.onENFJ_click}
      />
    )
  }

  renderENTJ() {
    return (
      <ENTJ
        title={'Extrovertido | iNtuitivo | Pensante | Juez'}
        content={`El Mariscal de Campo.
                  Tiendes a ser organizado y lógico sobre todo.
                  Deberías considerar un trabajo en leyes o ingeniería.`}
        onBackClick={this.onENTJ_click}
      />
    )
  }

  render() {
    let showISTJ = this.state.showISTJ
    let showISFJ = this.state.showISFJ
    let showINFJ = this.state.showINFJ
    let showINTJ = this.state.showINTJ
    let showISTP = this.state.showISTP
    let showISFP = this.state.showISFP
    let showINFP = this.state.showINFP
    let showINTP = this.state.showINTP
    let showESTP = this.state.showESTP
    let showESFP = this.state.showESFP
    let showENFP = this.state.showENFP
    let showENTP = this.state.showENTP
    let showESTJ = this.state.showESTJ
    let showESFJ = this.state.showESFJ
    let showENFJ = this.state.showENFJ
    let showENTJ = this.state.showENTJ
    if (showISTJ) {
      return this.renderISTJ()
    } else if (showISFJ) {
      return this.renderISFJ()
    } else if (showINFJ) {
      return this.renderINFJ()
    } else if (showINTJ) {
      return this.renderINTJ()
    } else if (showISTP) {
      return this.renderISTP()
    } else if (showISFP) {
      return this.renderISFP()
    } else if (showINFP) {
      return this.renderINFP()
    } else if (showINTP) {
      return this.renderINTP()
    } else if (showESTP) {
      return this.renderESTP()
    } else if (showESFP) {
      return this.renderESFP()
    } else if (showENFP) {
      return this.renderENFP()
    } else if (showENTP) {
      return this.renderENTP()
    } else if (showESTJ) {
      return this.renderESTJ()
    } else if (showESFJ) {
      return this.renderESFJ()
    } else if (showENFJ) {
      return this.renderENFJ()
    } else if (showENTJ) {
      return this.renderENTJ()
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">Resultado</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultBriggs}</h2>
        <hr className="my-5" />
        <p className="lead">Que significa este resultado?</p>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onISTJ_click}>
            ISTJ
          </li>
          <li className="list-group-item" onClick={this.onISFJ_click}>
            ISFJ
          </li>
          <li className="list-group-item" onClick={this.onINFJ_click}>
            INFJ
          </li>
          <li className="list-group-item" onClick={this.onINTJ_click}>
            INTJ
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onISTP_click}>
            ISTP
          </li>
          <li className="list-group-item" onClick={this.onISFP_click}>
            ISFP
          </li>
          <li className="list-group-item" onClick={this.onINFP_click}>
            INFP
          </li>
          <li className="list-group-item" onClick={this.onINTP_click}>
            INTP
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onESTP_click}>
            ESTP
          </li>
          <li className="list-group-item" onClick={this.onESFP_click}>
            ESFP
          </li>
          <li className="list-group-item" onClick={this.onENFP_click}>
            ENFP
          </li>
          <li className="list-group-item" onClick={this.onENTP_click}>
            ENTP
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onESTJ_click}>
            ESTJ
          </li>
          <li className="list-group-item" onClick={this.onESFJ_click}>
            ESFJ
          </li>
          <li className="list-group-item" onClick={this.onENFJ_click}>
            ENFJ
          </li>
          <li className="list-group-item" onClick={this.onENTJ_click}>
            ENTJ
          </li>
        </ul>
      </Wrapper>
    )
  }

  onISTJ_click() {
    let showISTJ = this.state.showISTJ
    this.setState({ showISTJ: !showISTJ })
  }

  onISFJ_click() {
    let showISFJ = this.state.showISFJ
    this.setState({ showISFJ: !showISFJ })
  }

  onINFJ_click() {
    let showINFJ = this.state.showINFJ
    this.setState({ showINFJ: !showINFJ })
  }

  onINTJ_click() {
    let showINTJ = this.state.showINTJ
    this.setState({ showINTJ: !showINTJ })
  }

  onISTP_click() {
    let showISTP = this.state.showISTP
    this.setState({ showISTP: !showISTP })
  }

  onISFP_click() {
    let showISFP = this.state.showISFP
    this.setState({ showISFP: !showISFP })
  }

  onINFP_click() {
    let showINFP = this.state.showINFP
    this.setState({ showINFP: !showINFP })
  }

  onINTP_click() {
    let showINTP = this.state.showINTP
    this.setState({ showINTP: !showINTP })
  }

  onESTP_click() {
    let showESTP = this.state.showESTP
    this.setState({ showESTP: !showESTP })
  }

  onESFP_click() {
    let showESFP = this.state.showESFP
    this.setState({ showESFP: !showESFP })
  }

  onENFP_click() {
    let showENFP = this.state.showENFP
    this.setState({ showENFP: !showENFP })
  }

  onENTP_click() {
    let showENTP = this.state.showENTP
    this.setState({ showENTP: !showENTP })
  }

  onESTJ_click() {
    let showESTJ = this.state.showESTJ
    this.setState({ showESTJ: !showESTJ })
  }

  onESFJ_click() {
    let showESFJ = this.state.showESFJ
    this.setState({ showESFJ: !showESFJ })
  }

  onENFJ_click() {
    let showENFJ = this.state.showENFJ
    this.setState({ showENFJ: !showENFJ })
  }

  onENTJ_click() {
    let showENTJ = this.state.showENTJ
    this.setState({ showENTJ: !showENTJ })
  }
}

Briggs.propTypes = {
  resultBriggs: PropTypes.string.isRequired
}

export default Briggs
