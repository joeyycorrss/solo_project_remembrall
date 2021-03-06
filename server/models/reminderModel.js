const { Pool } = require( 'pg' ); // POSTGRES

// URI FOR POSTGRES DATABASE
const PG_URI = "postgres://ztjdgmdj:u5pbdv7_zgulboEVHjew4W4ae6JnS3Ee@salt.db.elephantsql.com:5432/ztjdgmdj";

// CREATE NEW POOL USING DATABASE URI ABOVE
const pool = new Pool({
  connectionString: PG_URI,
});

// EXPORT QUERY FUNCTION THAT RETURNS A QUERY OF THE POOL
module.exports = {
  query: ( text, params, callback ) => {
    console.log( 'executed query ', text );
    return pool.query( text, params, callback );
  }
};
// SIMPLIFIED SO THAT WE DONT HAVE TO EXPORT THE POOL AND
// CALL POOL.QUERY EVERY TIME AND WE GET NOTIFIED IF IT WORKS