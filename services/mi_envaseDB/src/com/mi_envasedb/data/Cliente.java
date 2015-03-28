
package com.mi_envasedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  mi_envaseDB.Cliente
 *  03/27/2015 18:35:57
 * 
 */
public class Cliente {

    private Integer idCliente;
    private String nombre;
    private String password;
    private Set<com.mi_envasedb.data.ClienteTipoEnvase> clienteTipoEnvases = new HashSet<com.mi_envasedb.data.ClienteTipoEnvase>();

    public Integer getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Integer idCliente) {
        this.idCliente = idCliente;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<com.mi_envasedb.data.ClienteTipoEnvase> getClienteTipoEnvases() {
        return clienteTipoEnvases;
    }

    public void setClienteTipoEnvases(Set<com.mi_envasedb.data.ClienteTipoEnvase> clienteTipoEnvases) {
        this.clienteTipoEnvases = clienteTipoEnvases;
    }

}
