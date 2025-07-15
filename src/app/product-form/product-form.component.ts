import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ProductService, Product } from '../servicios/product.service';
import { ProductCommunicationService } from '../servicios/product-communication.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  form:FormGroup;
  isEditMode = false;
  mensaje: string = '';
  tipoMensaje: 'success' | 'error' = 'success';

  constructor(private fb: FormBuilder, private productService: ProductService, private productCommService: ProductCommunicationService) {
    this.form = this.fb.group({
    name: '',
    description: '',
    price: Number
  });
  }
  limpiarMensaje() {
    setTimeout(() => {
      this.mensaje = '';
    }, 2500); // El mensaje desaparece después de 2.5 segundos
  }

  @Input() editingProduct: Product | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editingProduct']) {
      if (this.editingProduct) {
        this.isEditMode = true;
        this.form.patchValue(this.editingProduct);
      } else {
        this.isEditMode = false;
        this.form.reset();
      }
    }
  }
  
  onSubmit() {
  if (this.form.valid) {
    if (this.editingProduct) {
      // Modo edición
      this.productService.updateProduct(this.editingProduct._id, this.form.value).subscribe({
        next: () => {
          this.productCommService.notifyProductEdited();
          this.form.reset();
          this.isEditMode = false;
          this.mensaje = 'Producto actualizado exitosamente';
          this.tipoMensaje = 'success';
          this.limpiarMensaje();
        },
        error: () => {
          this.mensaje = 'Error al actualizar el producto';
          this.tipoMensaje = 'error';
          this.limpiarMensaje();
        }
      });
    } else {
      // Modo agregar
      this.productService.addProduct(this.form.value).subscribe({
        next: () => {
          this.productCommService.notifyProductAdded();
          this.form.reset();
          this.mensaje = 'Producto agregado exitosamente';
          this.tipoMensaje = 'success';
          this.limpiarMensaje();
        },
        error: () => {
          this.mensaje = 'Error al agregar el producto';
          this.tipoMensaje = 'error';
          this.limpiarMensaje();
        }
      });
    }
  }
}


  @Output() cancelEdit = new EventEmitter<void>();

  onCancel() {
    this.isEditMode = false;
    this.editingProduct = null;
    this.form.reset();
    this.cancelEdit.emit();
  }


}
