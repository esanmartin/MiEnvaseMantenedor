
package com.mi_envasedb.data;



/**
 *  mi_envaseDB.MovimientoTipoEnvase
 *  03/27/2015 18:35:57
 * 
 */
public class MovimientoTipoEnvase {

    private Integer idMovimientoTipoEnvase;
    private Integer cantidad;
    private String total;
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
