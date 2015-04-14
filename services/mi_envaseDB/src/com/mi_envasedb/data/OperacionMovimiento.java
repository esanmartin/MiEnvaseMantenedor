
package com.mi_envasedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  mi_envaseDB.OperacionMovimiento
 *  04/05/2015 12:41:36
 * 
 */
public class OperacionMovimiento {

    private Integer idOperacionMovimiento;
    private String operador;
    private String descripcion;
    private Set<com.mi_envasedb.data.MovimientoTipoEnvase> movimientoTipoEnvases = new HashSet<com.mi_envasedb.data.MovimientoTipoEnvase>();

    public Integer getIdOperacionMovimiento() {
        return idOperacionMovimiento;
    }

    public void setIdOperacionMovimiento(Integer idOperacionMovimiento) {
        this.idOperacionMovimiento = idOperacionMovimiento;
    }

    public String getOperador() {
        return operador;
    }

    public void setOperador(String operador) {
        this.operador = operador;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<com.mi_envasedb.data.MovimientoTipoEnvase> getMovimientoTipoEnvases() {
        return movimientoTipoEnvases;
    }

    public void setMovimientoTipoEnvases(Set<com.mi_envasedb.data.MovimientoTipoEnvase> movimientoTipoEnvases) {
        this.movimientoTipoEnvases = movimientoTipoEnvases;
    }

}
