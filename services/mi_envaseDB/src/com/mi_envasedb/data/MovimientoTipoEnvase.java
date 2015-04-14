
package com.mi_envasedb.data;

import java.util.Date;


/**
 *  mi_envaseDB.MovimientoTipoEnvase
 *  04/05/2015 12:41:36
 * 
 */
public class MovimientoTipoEnvase {

    private Integer idMovimientoTipoEnvase;
    private Integer cantidad;
    private String total;
    private Date fecha;
    private String glosa;
    private OperacionMovimiento operacionMovimiento;
    private ClienteTipoEnvase clienteTipoEnvase;

    public Integer getIdMovimientoTipoEnvase() {
        return idMovimientoTipoEnvase;
    }

    public void setIdMovimientoTipoEnvase(Integer idMovimientoTipoEnvase) {
        this.idMovimientoTipoEnvase = idMovimientoTipoEnvase;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getGlosa() {
        return glosa;
    }

    public void setGlosa(String glosa) {
        this.glosa = glosa;
    }

    public OperacionMovimiento getOperacionMovimiento() {
        return operacionMovimiento;
    }

    public void setOperacionMovimiento(OperacionMovimiento operacionMovimiento) {
        this.operacionMovimiento = operacionMovimiento;
    }

    public ClienteTipoEnvase getClienteTipoEnvase() {
        return clienteTipoEnvase;
    }

    public void setClienteTipoEnvase(ClienteTipoEnvase clienteTipoEnvase) {
        this.clienteTipoEnvase = clienteTipoEnvase;
    }

}
