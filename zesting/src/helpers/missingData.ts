
interface InfoMissing {
  error: boolean;
  missing?: string[];
};

class MissingData {
  
  static missingData = ( data: Object ): InfoMissing => {
    const missingFields = Object.entries(data).filter(([key, value]) => {
      return value === null || value === undefined || value === "";
    });

    return missingFields?.length > 0 
      ? { error: true, missing: missingFields?.map(([key]) => key) } 
      : { error: false }

  };

  static missingDataBulk = ( data: Object[] ) => {
    const test = data.map(( item, i ) => {
      const t = Object.entries(item).filter(([key, value]) => {
        return value === null || value === undefined || value === "" || value === " ";
      })

      const data = t.map(([key, value]) => key )
      return { fila: i + 1, data }
    });

    const missingFields = test.filter(item => item.data.length > 0 );

    return missingFields?.length > 0 
      ? { error: true, missing: missingFields }
      : { error: false }
  };

  static notEmptyToObjet( data: Object ){

    return Object.fromEntries(
      Object.entries(data)
        .filter(([key, value]) => value )
    )

  }
}

export default MissingData;
