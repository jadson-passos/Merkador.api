import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaModel } from '../../app/models/categoriaModel';

@IonicPage()
@Component({
  selector: 'page-adm-categoria',
  templateUrl: 'adm-categoria.html',
})
export class AdmCategoriaPage {

  categoria: CategoriaModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    let _categ = this.navParams.get('_categoria');
    if (_categ)
      this.categoria = <CategoriaModel>_categ;
    else
      this.categoria = new CategoriaModel();

  }

}
