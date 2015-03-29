package com.agronomica;

import org.hibernate.Query;
import org.hibernate.Session;

import com.mi_envasedb.Mi_envaseDB;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

/**
 * This is a client-facing service class.  All
 * public methods will be exposed to the client.  Their return
 * values and parameters will be passed to the client or taken
 * from the client, respectively.  This will be a singleton
 * instance, shared between all requests. 
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL, String, Exception).
 * LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log level.
 * For info on these levels, look for tomcat/log4j documentation
 */
@ExposeToClient
public class InsertarMovimiento extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public InsertarMovimiento() {
       super(INFO);
    }
    
	public Integer InsertarMovimientoDB(int cantidad, int total, 
			int id_cliente_tipo_envase) {
		
		log(INFO, "start InsertarMovimientoDB.");
		
		log(INFO, "cantidad: " + cantidad);
		log(INFO, "total: " + total);
		log(INFO, "clienteTipoEnvaseId: " + id_cliente_tipo_envase);
		
		//TODO: obtener una mejor forma
		int id_operacion_movimiento = 1;
		
		@SuppressWarnings("deprecation")
		Mi_envaseDB service = (Mi_envaseDB) RuntimeAccess.getInstance().getService(
				Mi_envaseDB.class);
		
		log(INFO, "called Mi_envaseDB.");
		
		try {
			service.begin();
			Session session = service.getDataServiceManager().getSession();
			
			log(INFO, "session: " + session);
			
//			insert into MovimientoTipoEnvase (cantidad, total, 
//			operacionMovimientoId, clienteTipoEnvaseId) 
//			values (int, int, int, int)
			
			String hqlQuery = "insert into MovimientoTipoEnvase (cantidad, total, "
					+ "operacionMovimientoId, clienteTipoEnvaseId) values ("
					+ cantidad + "," + total + "," + id_operacion_movimiento 
					+ "," + id_cliente_tipo_envase + ")";
			
			log(INFO, "hqlQuery: " + hqlQuery);
			
			Query query = session.createQuery(hqlQuery);
			
			query.executeUpdate();
			
			log(INFO, "updateDB.");
			
			service.commit();
			
		} catch (Exception ex) {
			log(ERROR, "Exception: " + ex.getMessage());
			
			service.rollback();
			
			return 1;
		}
		
		log(INFO, "return 0");
		
		return 0;
	}

}
