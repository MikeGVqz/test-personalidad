import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrownDef, GreenDef, BlueDef, RedDef } from '../definitions/ColorsDef'
import { Wrapper } from '../utils/ResultWrapper'
import { NextBtn } from '../utils/Buttons'

class Colors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBrownDef: false,
      showGreenDef: false,
      showBlueDef: false,
      showRedDef: false
    }
    this.onBrownDefClick = this.onBrownDefClick.bind(this)
    this.onGreenDefClick = this.onGreenDefClick.bind(this)
    this.onBlueDefClick = this.onBlueDefClick.bind(this)
    this.onRedDefClick = this.onRedDefClick.bind(this)
  }

  renderNextBtn() {
    return (
      <NextBtn onClick={this.props._onNextClick}>
        <span>Siguiente</span>
        <div className="icon">
          <i className="fa fa-chevron-right" />
        </div>
      </NextBtn>
    )
  }

  renderBrownDef() {
    return (
      <BrownDef
        title={'Definición tipo café'}
        content={`Eres un constructor. Disfrutas liderar, crear y trabajar duro.
                 Eres una persona tradicional con respecto hacia la autoridad.
                  Tus fuerzas son tu diligencia, franqueza y practicidad.
                  Tus debilidades son la falta de tacto, paciencia y habilidad de abstracción.`}
        onBackClick={this.onBrownDefClick}
      />
    )
  }

  renderGreenDef() {
    return (
      <GreenDef
        title={'Definición tipo verde'}
        content={`Eres un planificador. Disfrutas soñar, conspirar e innovar.
                  Tiendes a gastar mucho tiempo pensando.
                  Tus fuerzas son tu visión, objetividad y atención al detalle.
                  Tus debilidades son tu dificultad de ponerte en el presente, tu falta de practicidad y velocidad.`}
        onBackClick={this.onGreenDefClick}
      />
    )
  }

  renderBlueDef() {
    return (
      <BlueDef
        title={'Definición tipo azul'}
        content={`Eres un relacionador. Disfrutas platicar, el romance y pasar tiempo con otros.
                Eres una persona empatica que tiende a poner las necesidades de otros sobre las tuyas.
                Tus fuerzas son tu simpatía, sinceridad y consciencia sobre tus emociones.
                Tus debilidades son tu subjetividad, flexibilidad y manipulabilidad.`}
        onBackClick={this.onBlueDefClick}
      />
    )
  }

  renderRedDef() {
    return (
      <RedDef
        title={'Definición tipo roja'}
        content={`Eres un aventurero. Disfrutas la acción, la emoción y el drama.
                  Aceptas fácil el cambio y eres espontáneo.
                  Tus fuerzas son tu tenacidad, intrepidez y adaptabilidad.
                  Tus debilidades son tu descuido y tu falta de concentración y diligencia.`}
        onBackClick={this.onRedDefClick}
      />
    )
  }

  render() {
    let showBrownDef = this.state.showBrownDef
    let showGreenDef = this.state.showGreenDef
    let showBlueDef = this.state.showBlueDef
    let showRedDef = this.state.showRedDef
    if (showBrownDef) {
      return this.renderBrownDef()
    } else if (showGreenDef) {
      return this.renderGreenDef()
    } else if (showBlueDef) {
      return this.renderBlueDef()
    } else if (showRedDef) {
      return this.renderRedDef()
    }
    return (
      <Wrapper className="jumbotron">
        <h1 className="display-3 title">Resultado de Color</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultColors}</h2>
        <hr className="my-5" />
        <p className="lead">¿Qué significa este resultado?</p>
        <ul className="list-group">
          <li className="list-group-item" onClick={this.onBrownDefClick}>
            Brown
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onGreenDefClick}>
            Green
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onBlueDefClick}>
            Blue
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onRedDefClick}>
            Red
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
        </ul>
        {this.renderNextBtn()}
      </Wrapper>
    )
  }

  onBrownDefClick() {
    let showBrownDef = this.state.showBrownDef
    this.setState({ showBrownDef: !showBrownDef })
  }

  onGreenDefClick() {
    let showGreenDef = this.state.showGreenDef
    this.setState({ showGreenDef: !showGreenDef })
  }

  onBlueDefClick() {
    let showBlueDef = this.state.showBlueDef
    this.setState({ showBlueDef: !showBlueDef })
  }

  onRedDefClick() {
    let showRedDef = this.state.showRedDef
    this.setState({ showRedDef: !showRedDef })
  }
}

Colors.propTypes = {
  resultColors: PropTypes.string.isRequired,
  resultBrown: PropTypes.string.isRequired,
  resultGreen: PropTypes.string.isRequired,
  resultBlue: PropTypes.string.isRequired,
  resultRed: PropTypes.string.isRequired
}

export default Colors
