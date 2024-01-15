export const procedureCreate = ( 
  tableName:string, 
  procedureParamsWithoutId:string,
  listColumnsWithOutId:string,
  valuesProcedureWithoutId:string
) => {
  return `CREATE PROCEDURE \`${tableName}_create\` (
    ${procedureParamsWithoutId}
    OUT p_message VARCHAR(255),
    OUT p_insert_id INT
)
BEGIN
    -- DECLARE v_counter INT;
    -- SELECT COUNT(*) INTO v_counter FROM ${tableName} WHERE parametro????? = _parametro???? ;

    -- IF v_counter > 0 THEN
        -- SET p_message = CONCAT('los datos ', _parametro?????,' ya existe en la base de datos');
        -- SET p_insert_id = NULL;
    -- ELSE
        INSERT INTO ${tableName}
            ( ${listColumnsWithOutId} )
        VALUES
            ( ${valuesProcedureWithoutId} );
        SET p_message = CONCAT('Datos creados con éxito');
        SET p_insert_id = LAST_INSERT_ID();
    -- END IF;
END`;
};

export const procedureUpdate = (
  tableName:string,
  procedureParams:string,
  keyValuesProcedureWithoutId:string
) => {
  return `CREATE PROCEDURE \`${tableName}_update\` (
    ${procedureParams}
    OUT p_message VARCHAR(255)
)
BEGIN
    DECLARE v_counter INT;
    SELECT COUNT(*) INTO v_counter FROM ${tableName} WHERE id${tableName} = _id${tableName};

    IF v_counter = 0 THEN
        SET p_message = CONCAT('Los datos con id: ', _id${tableName} , ' no existen en la base de datos');
    ELSE
        UPDATE ${tableName}
        SET
            ${keyValuesProcedureWithoutId}
        WHERE id${tableName} = _id${tableName};
        SET p_message = 'Datos actualizados con éxito';
    END IF;
END`;
};

export const procedureDelete = ( tableName:string ) => {
  return `CREATE PROCEDURE \`${tableName}_delete\` (
    IN _id${tableName} INT,
    OUT p_message VARCHAR(200)
)
BEGIN
    DECLARE v_counter INT;
    SELECT COUNT(*) INTO v_counter FROM ${tableName} WHERE id${tableName} = _id${tableName};

    IF v_counter = 0 THEN
        SET p_message = CONCAT('Los datos con id: ', _id${tableName}, ' no existen en la base de datos');
    ELSE
        DELETE FROM ${tableName} WHERE id${tableName} = _id${tableName};
        SET p_message = CONCAT('Datos con id: ', _id${tableName}, ' eliminado con éxito');
    END IF;
END`;
};
