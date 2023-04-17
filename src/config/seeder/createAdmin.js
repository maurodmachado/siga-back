const Autoridad = require("../../models/Autoridad");
const Persona = require("../../models/Persona");
const Usuario = require("../../models/Usuario");
const bcryptjs = require("bcryptjs");
const colors = require("colors/safe");

exports.createAdmin = async (escuelaFray, autoridadAdminType) => {
    console.log(colors.cyan("Persona - Administrador"));
    
    const personaAdmin = await Persona({
      nombres: "Administrador",
      apellidos: "Siga",
      numeroDocumento: "99999991",
      tipoDocumento: "DNI",
      genero: "Masculino",
      grupoFactor: "0+",
      nacionalidad: "AR",
      fechaNacimiento: "1982-10-19T16:36:14.197Z",
      domicilioLocalidad: "San Fernando del Valle de Catamarca",
      domicilioCodigoPostal: 4700,
      domicilioBarrio: "barrio profesor",
      domicilioCalle: null,
      domicilioNumeroCalle: null,
      domicilioPiso: null,
      domicilioDepartamento: null,
      ocupacion: "Administrador",
      domicilioLaboralLocalidad: null,
      domicilioLaboralCodigoPostal: null, 
      domicilioLaboralBarrio: null,
      domicilioLaboralCalle: null,
      domicilioLaboralNumeroCalle: null,
      domicilioLaboralPiso: null,
      domicilioLaboralDepartamento: null,
      contactoTelefono: "03834896574",
      contactoTelefonoSec: null,
      contactoCorreo: "administrador@dominio.com"
    }).save();

    
  console.log(colors.cyan("Autoridad - Administrador"));
  const autoridadAdmin = await Autoridad({
    tipo: autoridadAdminType._id,
    escuela: escuelaFray._id,
    personaRelacionada: null,
    persona: personaAdmin._id,
    cursos: []
  }).save();

    console.log(colors.cyan("Usuario - Administrador"));
    const salt = await bcryptjs.genSalt(10);
    await Usuario({
      usuario: "admin",
      password: await bcryptjs.hash("admin", salt),
      autoridad: autoridadAdmin._id,
    }).save()

};