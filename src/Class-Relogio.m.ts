class Relogio {
  public el_horas = document.getElementById('horas') as HTMLParagraphElement;
  public el_minutos = document.getElementById(
    'minutos',
  ) as HTMLParagraphElement;
  public el_segundos = document.getElementById(
    'segundos',
  ) as HTMLParagraphElement;
  private data = new Date();

  constructor() {
    this.el_horas.textContent = '00';
    this.el_minutos.textContent = '00';
    this.el_segundos.textContent = '00';
  }

  private tempoEmHoras(): string {
    return this.data.getHours().toString().length == 1
      ? '0' + this.data.getHours().toString()
      : this.data.getHours().toString();
  }
  private tempoEmMinutos(): string {
    return this.data.getMinutes().toString().length == 1
      ? '0' + this.data.getMinutes().toString()
      : this.data.getMinutes().toString();
  }
  private tempoEmSegundos(): string {
    return this.data.getSeconds().toString().length == 1
      ? '0' + this.data.getSeconds().toString()
      : this.data.getSeconds().toString();
  }

  public atualizarHorario(): void {
    this.data = new Date();
    this.el_horas.textContent = this.tempoEmHoras();
    this.el_minutos.textContent = this.tempoEmMinutos();
    this.el_segundos.textContent = this.tempoEmSegundos();
  }
}

export default Relogio;
