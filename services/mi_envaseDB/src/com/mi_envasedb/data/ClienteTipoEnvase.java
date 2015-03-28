
package com.mi_envasedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  mi_envaseDB.ClienteTipoEnvase
 *  03/27/2015 18:35:57
 * 
 */
public class ClienteTipoEnvase {

    private Integer idClienteTipoEnvase;
    private String cantidad;
    private TipoEnvase tipoEnvase;
    private Cliente cliente;
    private Set<com.mi_envasedb.data.MovimientoTipoEnvase> movimientoTipoEnvases = new HashSet<com.mi_envasedb.data.MovimientoTipoEnvase>();

    public Integer getIdClienteTipoEnvase() {
        return idClienteTipoEnvase;
    }

    public void setIdClienteTipoEnvase(Integer idClienteTipoEnvase) {
        this.idClienteTipoEnvase = idClienteTipoEnvase;
    }

    public String getCantidad() {
        return cantidad;
    }

    public void setCantidad(String cantidad) {
        this.cantidad = cantidad;
    }

    public TipoEnvase getTipoEnvase() {
        return tipoEnvase;
    }

    public void setTipoEnvase(TipoEnvase tipoEnvase) {
        this.tipoEnvase = tipoEnvase;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Set<com.mi_envasedb.data.MovimientoTipoEnvase> getMovimientoTipoEnvases() {
        return movimientoTipoEnvases;
    }

    public void setMovimientoTipoEnvases(Set<com.mi_envasedb.data.MovimientoTipoEnvase> movimientoTipoEnvases) {
        this.movimientoTipoEnvases = movimientoTipoEnvases;
    }

}
