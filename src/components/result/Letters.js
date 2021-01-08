import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import { LetterA, LetterB, LetterC, LetterD } from '../definitions/LettersDef'
import { NextBtn } from '../utils/Buttons'

class Letters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLetterA: false,
      showLetterB: false,
      showLetterC: false,
      showLetterD: false
    }
    this.onLetterA_Click = this.onLetterA_Click.bind(this)
    this.onLetterB_Click = this.onLetterB_Click.bind(this)
    this.onLetterC_Click = this.onLetterC_Click.bind(this)
    this.onLetterD_Click = this.onLetterD_Click.bind(this)
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

  renderLetterA() {
    return (
      <LetterA
        title={'Definición letra A'}
        content={`Eres personalidad tipo A. Te gusta estar en control sobre todo.
                Tus fuerzas son tu tenacidad, confianza y tu sentido práctico                .
                Tus debilidades son tu falta de empatía, disciplina y conciencia de los detalles.`}
        onBackClick={this.onLetterA_Click}
      />
    )
  }

  renderLetterB() {
    return (
      <LetterB
        title={'Definición letra B'}
        content={`Eres personalidad tipo B. Te gusta estar rodeado de personas.
                Tus fuerzas son tu empatía, entusiasmo y espontaneidad.
                Tus debilidades son tu falta de atención, paciencia y confianza.`}
        onBackClick={this.onLetterB_Click}
      />
    )
  }

  renderLetterC() {
    return (
      <LetterC
        title={'Definición letra C'}
        content={`Eres personalidad tipo C. You like to Te gusta pensar bien las cosas.
               Tus fuerzas son tu racionalidad, objetividad y originalidad.
                Tus debilidades son tu falta de espontaneidad, practicidad y empatía.`}
        onBackClick={this.onLetterC_Click}
      />
    )
  }

  renderLetterD() {
    return (
      <LetterD
        title={'Definición letra D'}
        content={`Eres personalidad tipo D. Te gusta sentirte a salvo y seguro en la vida.
                  ´Tus fuerzas son tu organización, compasión y paciencia.
                  Tus debilidades son tu falta de atención, adaptabilidad y asertividad.`}
        onBackClick={this.onLetterD_Click}
      />
    )
  }

  render() {
    let showLetterA = this.state.showLetterA
    let showLetterB = this.state.showLetterB
    let showLetterC = this.state.showLetterC
    let showLetterD = this.state.showLetterD
    if (showLetterA) {
      return this.renderLetterA()
    } else if (showLetterB) {
      return this.renderLetterB()
    } else if (showLetterC) {
      return this.renderLetterC()
    } else if (showLetterD) {
      return this.renderLetterD()
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">Resultado de letras</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultLetters}</h2>
        <hr className="my-5" />
        <p className="lead">¿Qué significa este resultado?</p>
        <ul className="list-group">
          <li className="list-group-item" onClick={this.onLetterA_Click}>
            Letra A
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onLetterB_Click}>
           Letra B
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onLetterC_Click}>
           Letra C
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onLetterD_Click}>
           Letra D
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
        </ul>
        {this.renderNextBtn()}
      </Wrapper>
    )
  }

  onLetterA_Click() {
    let showLetterA = this.state.showLetterA
    this.setState({ showLetterA: !showLetterA })
  }

  onLetterB_Click() {
    let showLetterB = this.state.showLetterB
    this.setState({ showLetterB: !showLetterB })
  }

  onLetterC_Click() {
    let showLetterC = this.state.showLetterC
    this.setState({ showLetterC: !showLetterC })
  }

  onLetterD_Click() {
    let showLetterD = this.state.showLetterD
    this.setState({ showLetterD: !showLetterD })
  }
}

Letters.propTypes = {
  resultLetters: PropTypes.string.isRequired
}

export default Letters
