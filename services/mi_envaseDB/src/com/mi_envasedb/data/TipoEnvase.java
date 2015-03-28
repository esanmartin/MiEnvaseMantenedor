
package com.mi_envasedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  mi_envaseDB.TipoEnvase
 *  03/27/2015 18:35:57
 * 
 */
public class TipoEnvase {

    private Integer idTipoEnvase;
    private String descripcion;
    private Set<com.mi_envasedb.data.ClienteTipoEnvase> clienteTipoEnvases = new HashSet<com.mi_envasedb.data.ClienteTipoEnvase>();

    public Integer getIdTipoEnvase() {
        return idTipoEnvase;
    }

    public void setIdTipoEnvase(Integer idTipoEnvase) {
        this.idTipoEnvase = idTipoEnvase;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<com.mi_envasedb.data.ClienteTipoEnvase> getClienteTipoEnvases() {
        return clienteTipoEnvases;
    }

    public void setClienteTipoEnvases(Set<com.mi_envasedb.data.ClienteTipoEnvase> clienteTipoEnvases) {
        this.clienteTipoEnvases = clienteTipoEnvases;
    }

}
