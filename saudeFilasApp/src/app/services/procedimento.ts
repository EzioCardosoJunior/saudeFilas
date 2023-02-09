import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Procedimentos {

    MunicipioCentral: any = {
        "result": [
            {
                "nome": "Selecione a Central",
                "codigo": 0
            },
            {
                "nome": "Central Reguladora Siderópolis",
                "codigo": 106
            },
            {
                "nome": "Central Reguladora Treviso",
                "codigo": 1488
            },
            {
                "nome": "Central Reguladora Criciúma",
                "codigo": 111
            }
        ]
    }

    DadosConsulta: any = {
        "message": "Código do procedimento",
        "result": [
            {
                "codigo": "0009001",
                "descricao": "CONSULTA EM GINECOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0009001 - CONSULTA EM GINECOLOGIA - GERAL"
            },
            {
                "codigo": "0021001",
                "descricao": "CONSULTA EM UROLOGIA GERAL - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0021001 - CONSULTA EM UROLOGIA GERAL - ADULTO"
            },
            {
                "codigo": "0026061",
                "descricao": "RESSONANCIA MAGNETICA DE MASTOIDES OU OUVIDOS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0026061 - RESSONANCIA MAGNETICA DE MASTOIDES OU OUVIDOS"
            },
            {
                "codigo": "0031050",
                "descricao": "ANGIOFLUORESCEINOGRAFIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0031050 - ANGIOFLUORESCEINOGRAFIA"
            },
            {
                "codigo": "0057004",
                "descricao": "VIDEOLARINGOSCOPIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0057004 - VIDEOLARINGOSCOPIA"
            },
            {
                "codigo": "0072027",
                "descricao": "ULTRA-SONOGRAFIA DOPPLER DE CAROTIDAS E VERTEBRAIS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0072027 - ULTRA-SONOGRAFIA DOPPLER DE CAROTIDAS E VERTEBRAIS"
            },
            {
                "codigo": "0127019",
                "descricao": "ECODOPPLERCARDIOGRAMA COM ESTRESSE FARMACOLOGICO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0127019 - ECODOPPLERCARDIOGRAMA COM ESTRESSE FARMACOLOGICO"
            },
            {
                "codigo": "0210004",
                "descricao": "ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITACAO DO DESENVOLVIMENTO NEUROPSICOMOTOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0210004 - ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITACAO DO DESENVOLVIMENTO NEUROPSICOMOTOR"
            },
            {
                "codigo": "0282098",
                "descricao": "CONSULTA EM NEUROLOGIA - PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0282098 - CONSULTA EM NEUROLOGIA - PEDIATRIA"
            },
            {
                "codigo": "0320002",
                "descricao": "MAMOGRAFIA BILATERAL DE RASTREAMENTO (ROTINA)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0320002 - MAMOGRAFIA BILATERAL DE RASTREAMENTO (ROTINA)"
            },
            {
                "codigo": "0351001",
                "descricao": "CONSULTA EM PSIQUIATRIA -GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0351001 - CONSULTA EM PSIQUIATRIA -GERAL"
            },
            {
                "codigo": "0351005",
                "descricao": "ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITACAO – PSICOLOGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0351005 - ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITACAO – PSICOLOGIA"
            },
            {
                "codigo": "0351006",
                "descricao": "ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITACAO - TERAPIA OCUPACIONAL ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0351006 - ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITACAO - TERAPIA OCUPACIONAL "
            },
            {
                "codigo": "0351007",
                "descricao": "ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITACAO – FISIOTERAPIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0351007 - ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITACAO – FISIOTERAPIA"
            },
            {
                "codigo": "0351008",
                "descricao": "ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITACAO - ASSISTENTE SOCIAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0351008 - ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITACAO - ASSISTENTE SOCIAL"
            },
            {
                "codigo": "0351009",
                "descricao": "CONSULTA EM FONOAUDIOLOGIA ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0351009 - CONSULTA EM FONOAUDIOLOGIA "
            },
            {
                "codigo": "0701003",
                "descricao": "CONSULTA EM BUCO-MAXILO FACIAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701003 - CONSULTA EM BUCO-MAXILO FACIAL"
            },
            {
                "codigo": "0701022",
                "descricao": "CONSULTA EM FISIOTERAPIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701022 - CONSULTA EM FISIOTERAPIA"
            },
            {
                "codigo": "0701121",
                "descricao": "CONSULTA EM PSIQUIATRIA - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701121 - CONSULTA EM PSIQUIATRIA - ADULTO"
            },
            {
                "codigo": "0701141",
                "descricao": "CONSULTA EM OFTALMOLOGIA ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701141 - CONSULTA EM OFTALMOLOGIA ADULTO"
            },
            {
                "codigo": "0701143",
                "descricao": "CONSULTA EM ORTOPEDIA ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701143 - CONSULTA EM ORTOPEDIA ADULTO"
            },
            {
                "codigo": "0701222",
                "descricao": "CONSULTA EM NEFROLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701222 - CONSULTA EM NEFROLOGIA - GERAL"
            },
            {
                "codigo": "0701228",
                "descricao": "CONSULTA EM PNEUMOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701228 - CONSULTA EM PNEUMOLOGIA - GERAL"
            },
            {
                "codigo": "0701229",
                "descricao": "CONSULTA EM PROCTOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701229 - CONSULTA EM PROCTOLOGIA - GERAL"
            },
            {
                "codigo": "0701231",
                "descricao": "CONSULTA EM REUMATOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701231 - CONSULTA EM REUMATOLOGIA - GERAL"
            },
            {
                "codigo": "0701344",
                "descricao": "CONSULTA EM CARDIOLOGIA - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701344 - CONSULTA EM CARDIOLOGIA - ADULTO"
            },
            {
                "codigo": "0701418",
                "descricao": "CONSULTA EM NEUROLOGIA - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701418 - CONSULTA EM NEUROLOGIA - ADULTO"
            },
            {
                "codigo": "0701419",
                "descricao": "CONSULTA EM OTORRINOLARINGOLOGIA - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701419 - CONSULTA EM OTORRINOLARINGOLOGIA - ADULTO"
            },
            {
                "codigo": "0701420",
                "descricao": "CONSULTA EM REUMATOLOGIA - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701420 - CONSULTA EM REUMATOLOGIA - ADULTO"
            },
            {
                "codigo": "0701823",
                "descricao": "CONSULTA EM PEQUENAS CIRURGIAS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701823 - CONSULTA EM PEQUENAS CIRURGIAS"
            },
            {
                "codigo": "0703834",
                "descricao": "CONSULTA EM GINECOLOGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0703834 - CONSULTA EM GINECOLOGIA"
            },
            {
                "codigo": "0705314",
                "descricao": "COLONOSCOPIA - PPI",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0705314 - COLONOSCOPIA - PPI"
            },
            {
                "codigo": "0710411",
                "descricao": "CONSULTA EM PSICOLOGIA ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710411 - CONSULTA EM PSICOLOGIA ADULTO"
            },
            {
                "codigo": "0710455",
                "descricao": "CONSULTA EM PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710455 - CONSULTA EM PEDIATRIA"
            },
            {
                "codigo": "0710589",
                "descricao": "ELETROCARDIOGRAMA - TELEMEDICINA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710589 - ELETROCARDIOGRAMA - TELEMEDICINA"
            },
            {
                "codigo": "0710592",
                "descricao": "CONSULTA EM ENDOCRINOLOGIA - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710592 - CONSULTA EM ENDOCRINOLOGIA - ADULTO"
            },
            {
                "codigo": "0710996",
                "descricao": "AUDIOMETRIA E IMITANCIOMETRIA - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710996 - AUDIOMETRIA E IMITANCIOMETRIA - ADULTO"
            },
            {
                "codigo": "0755029",
                "descricao": "CONSULTA EM NEUROLOGIA - PPI",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0755029 - CONSULTA EM NEUROLOGIA - PPI"
            },
            {
                "codigo": "0800024",
                "descricao": "EXERESE DE CISTO SEBACEO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0800024 - EXERESE DE CISTO SEBACEO"
            },
            {
                "codigo": "0800025",
                "descricao": "EXERESE DE LIPOMA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0800025 - EXERESE DE LIPOMA"
            },
            {
                "codigo": "0800028",
                "descricao": "EXERESE DE TUMOR DE PELE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0800028 - EXERESE DE TUMOR DE PELE"
            },
            {
                "codigo": "0800522",
                "descricao": "EXERESE DE CALO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0800522 - EXERESE DE CALO"
            },
            {
                "codigo": "0800546",
                "descricao": "PROCEDIMENTOS /CIRURGIA EM PELE, TECIDO SUBCUTANEO MUCOSA I",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0800546 - PROCEDIMENTOS /CIRURGIA EM PELE, TECIDO SUBCUTANEO MUCOSA I"
            },
            {
                "codigo": "0800547",
                "descricao": "CONSULTA EM PEQUENA CIRURGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0800547 - CONSULTA EM PEQUENA CIRURGIA"
            },
            {
                "codigo": "1125012",
                "descricao": "CONSULTA EM INFECTOLOGIA - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1125012 - CONSULTA EM INFECTOLOGIA - ADULTO"
            },
            {
                "codigo": "1400008",
                "descricao": "ECOCARDIOGRAFIA BI-DIMENSIONAL COM OU SEM DOPPLER ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1400008 - ECOCARDIOGRAFIA BI-DIMENSIONAL COM OU SEM DOPPLER ADULTO"
            },
            {
                "codigo": "1401003",
                "descricao": "ULTRA-SONOGRAFIA AXILA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401003 - ULTRA-SONOGRAFIA AXILA"
            },
            {
                "codigo": "1401005",
                "descricao": "ULTRA-SONOGRAFIA DE ARTICULACAO COXO-FEMURAL DIREITA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401005 - ULTRA-SONOGRAFIA DE ARTICULACAO COXO-FEMURAL DIREITA"
            },
            {
                "codigo": "1401006",
                "descricao": "ULTRA-SONOGRAFIA DE ARTICULACAO COXO-FEMURAL ESQUERDA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401006 - ULTRA-SONOGRAFIA DE ARTICULACAO COXO-FEMURAL ESQUERDA"
            },
            {
                "codigo": "1401009",
                "descricao": " ULTRA-SONOGRAFIA  DE ARTICULACAO ATM",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401009 -  ULTRA-SONOGRAFIA  DE ARTICULACAO ATM"
            },
            {
                "codigo": "1401010",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEN SUPERIOR (FIGADO, VESICULA, VIAS BILIARES)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401010 - ULTRA-SONOGRAFIA DE ABDOMEN SUPERIOR (FIGADO, VESICULA, VIAS BILIARES)"
            },
            {
                "codigo": "1401028",
                "descricao": "ULTRA-SONOGRAFIA DE ARTICULACAO BRACO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401028 - ULTRA-SONOGRAFIA DE ARTICULACAO BRACO DIREITO"
            },
            {
                "codigo": "1401031",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEM SUPERIOR (FIGADO, VESICULA, VIAS BILIARES) - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401031 - ULTRA-SONOGRAFIA DE ABDOMEM SUPERIOR (FIGADO, VESICULA, VIAS BILIARES) - ADULTO"
            },
            {
                "codigo": "1401032",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEM SUPERIOR (FIGADO, VESICULA, VIAS BILIARES) -PEDIATRICA ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401032 - ULTRA-SONOGRAFIA DE ABDOMEM SUPERIOR (FIGADO, VESICULA, VIAS BILIARES) -PEDIATRICA "
            },
            {
                "codigo": "1401037",
                "descricao": "ULTRA-SONOGRAFIA DE PARTES MOLES",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401037 - ULTRA-SONOGRAFIA DE PARTES MOLES"
            },
            {
                "codigo": "1401056",
                "descricao": "ULTRASSONOGRAFIA DE ABDOMEN INFERIOR ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401056 - ULTRASSONOGRAFIA DE ABDOMEN INFERIOR "
            },
            {
                "codigo": "1401201",
                "descricao": "ULTRA-SONOGRAFIA OBSTETRICA                                 ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401201 - ULTRA-SONOGRAFIA OBSTETRICA                                 "
            },
            {
                "codigo": "1401202",
                "descricao": "ULTRA-SONOGRAFIA TRANSVAGINAL                               ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401202 - ULTRA-SONOGRAFIA TRANSVAGINAL                               "
            },
            {
                "codigo": "1401203",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEN TOTAL ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401203 - ULTRA-SONOGRAFIA DE ABDOMEN TOTAL ADULTO"
            },
            {
                "codigo": "1401204",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEN TOTAL INFANTIL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401204 - ULTRA-SONOGRAFIA DE ABDOMEN TOTAL INFANTIL"
            },
            {
                "codigo": "1401402",
                "descricao": "ECOGRAFIA DE MAMAS - BILATERAL                              ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401402 - ECOGRAFIA DE MAMAS - BILATERAL                              "
            },
            {
                "codigo": "1401403",
                "descricao": "ECOGRAFIA DE PROSTATA ( VIA ABDOMINAL )                     ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401403 - ECOGRAFIA DE PROSTATA ( VIA ABDOMINAL )                     "
            },
            {
                "codigo": "1401406",
                "descricao": "ULTRA-SONOGRAFIA  DO APARELHO URINARIO ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401406 - ULTRA-SONOGRAFIA  DO APARELHO URINARIO ADULTO"
            },
            {
                "codigo": "1401409",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO OMBRO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401409 - ULTRA-SONOGRAFIA  DE ARTICULACAO OMBRO DIREITO"
            },
            {
                "codigo": "1401500",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO OMBRO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401500 - ULTRA-SONOGRAFIA  DE ARTICULACAO OMBRO ESQUERDO"
            },
            {
                "codigo": "1401505",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO COTOVELO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401505 - ULTRA-SONOGRAFIA  DE ARTICULACAO COTOVELO DIREITO"
            },
            {
                "codigo": "1401506",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO COTOVELO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401506 - ULTRA-SONOGRAFIA  DE ARTICULACAO COTOVELO ESQUERDO"
            },
            {
                "codigo": "1401507",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO ANTEBRACO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401507 - ULTRA-SONOGRAFIA  DE ARTICULACAO ANTEBRACO DIREITO"
            },
            {
                "codigo": "1401508",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO ANTEBRACO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401508 - ULTRA-SONOGRAFIA  DE ARTICULACAO ANTEBRACO ESQUERDO"
            },
            {
                "codigo": "1401509",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO PUNHO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401509 - ULTRA-SONOGRAFIA  DE ARTICULACAO PUNHO DIREITO"
            },
            {
                "codigo": "1401512",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO MAO ESQUERDA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401512 - ULTRA-SONOGRAFIA  DE ARTICULACAO MAO ESQUERDA"
            },
            {
                "codigo": "1401516",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO JOELHO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401516 - ULTRA-SONOGRAFIA  DE ARTICULACAO JOELHO DIREITO"
            },
            {
                "codigo": "1401517",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO JOELHO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401517 - ULTRA-SONOGRAFIA  DE ARTICULACAO JOELHO ESQUERDO"
            },
            {
                "codigo": "1401525",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO CERVICAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401525 - ULTRA-SONOGRAFIA  DE ARTICULACAO CERVICAL"
            },
            {
                "codigo": "1401801",
                "descricao": "ECOGRAFIA DE ABDOMEN TOTAL (ABDOMEN SUP. RETROPERITONIO, RI",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401801 - ECOGRAFIA DE ABDOMEN TOTAL (ABDOMEN SUP. RETROPERITONIO, RI"
            },
            {
                "codigo": "1401913",
                "descricao": "ECOGRAFIA DE BOLSA ESCROTAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401913 - ECOGRAFIA DE BOLSA ESCROTAL"
            },
            {
                "codigo": "1401920",
                "descricao": "ECOGRAFIA DE TIREOIDE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401920 - ECOGRAFIA DE TIREOIDE"
            },
            {
                "codigo": "1401921",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401921 - ULTRA-SONOGRAFIA  DE ARTICULACAO"
            },
            {
                "codigo": "1401929",
                "descricao": "ULTRA-SONOGRAFIA  PROSTATA ( VIA TRANSRETAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401929 - ULTRA-SONOGRAFIA  PROSTATA ( VIA TRANSRETAL)"
            },
            {
                "codigo": "1401937",
                "descricao": "ECOGRAFIA DE ABDOMEN SUPERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401937 - ECOGRAFIA DE ABDOMEN SUPERIOR"
            },
            {
                "codigo": "1401940",
                "descricao": "ECOGRAFIA DE PARTES MOLES",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401940 - ECOGRAFIA DE PARTES MOLES"
            },
            {
                "codigo": "1401941",
                "descricao": "ECOGRAFIA DE ULTRASONOGRAFIA PAREDE ABDOMINAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401941 - ECOGRAFIA DE ULTRASONOGRAFIA PAREDE ABDOMINAL"
            },
            {
                "codigo": "1401943",
                "descricao": "ULTRA-SONOGRAFIA DE REGIAO INGUINAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401943 - ULTRA-SONOGRAFIA DE REGIAO INGUINAL"
            },
            {
                "codigo": "1401977",
                "descricao": "ULTRA-SONOGRAFIA DE MAMAS (BILATERAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401977 - ULTRA-SONOGRAFIA DE MAMAS (BILATERAL)"
            },
            {
                "codigo": "1401978",
                "descricao": "ULTRA-SONOGRAFIA DE BOLSA ESCROTAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401978 - ULTRA-SONOGRAFIA DE BOLSA ESCROTAL"
            },
            {
                "codigo": "1401979",
                "descricao": "ULTRA-SONOGRAFIA DE PAREDE ABDOMINAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401979 - ULTRA-SONOGRAFIA DE PAREDE ABDOMINAL"
            },
            {
                "codigo": "1401980",
                "descricao": "ULTRA-SONOGRAFIA DE TIREOIDE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401980 - ULTRA-SONOGRAFIA DE TIREOIDE"
            },
            {
                "codigo": "1401981",
                "descricao": "ULTRA-SONOGRAFIA DE PROSTATA (VIA TRANSRETAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401981 - ULTRA-SONOGRAFIA DE PROSTATA (VIA TRANSRETAL)"
            },
            {
                "codigo": "1401986",
                "descricao": "ULTRA-SONOGRAFIA OBSTETRICA - TRANSVAGINAL (ATE 12 SEMANAS)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401986 - ULTRA-SONOGRAFIA OBSTETRICA - TRANSVAGINAL (ATE 12 SEMANAS)"
            },
            {
                "codigo": "1401988",
                "descricao": "ULTRA-SONOGRAFIA PELVICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401988 - ULTRA-SONOGRAFIA PELVICA"
            },
            {
                "codigo": "1401989",
                "descricao": "ULTRA-SONOGRAFIA  DE VIAS URINARIAS (ACIMA DE 13 ANOS)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401989 - ULTRA-SONOGRAFIA  DE VIAS URINARIAS (ACIMA DE 13 ANOS)"
            },
            {
                "codigo": "1401997",
                "descricao": "ULTRA-SONOGRAFIA DE PROSTATA (VIA ABDOMINAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401997 - ULTRA-SONOGRAFIA DE PROSTATA (VIA ABDOMINAL)"
            },
            {
                "codigo": "1401998",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEN TOTAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401998 - ULTRA-SONOGRAFIA DE ABDOMEN TOTAL"
            },
            {
                "codigo": "1401999",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEN SUPERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401999 - ULTRA-SONOGRAFIA DE ABDOMEN SUPERIOR"
            },
            {
                "codigo": "1407044",
                "descricao": "TESTE DE ESFORCO OU TESTE ERGOMETRICO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1407044 - TESTE DE ESFORCO OU TESTE ERGOMETRICO"
            },
            {
                "codigo": "1500101",
                "descricao": "AUDIOMETRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1500101 - AUDIOMETRIA"
            },
            {
                "codigo": "1670007",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER VENOSO - MID",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670007 - ULTRA-SONOGRAFIA  DOPPLER VENOSO - MID"
            },
            {
                "codigo": "1670009",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER VENOSO - MIE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670009 - ULTRA-SONOGRAFIA  DOPPLER VENOSO - MIE"
            },
            {
                "codigo": "1670012",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M I D",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670012 - ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M I D"
            },
            {
                "codigo": "1670013",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M I E",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670013 - ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M I E"
            },
            {
                "codigo": "1670014",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M S D",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670014 - ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M S D"
            },
            {
                "codigo": "1670015",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M S E",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670015 - ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M S E"
            },
            {
                "codigo": "1670031",
                "descricao": "ECOCARDIOGRAFIA TRANSTORACICA ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670031 - ECOCARDIOGRAFIA TRANSTORACICA "
            },
            {
                "codigo": "1703204",
                "descricao": "HOLTER 24 HORAS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1703204 - HOLTER 24 HORAS"
            },
            {
                "codigo": "1711101",
                "descricao": "COLONOSCOPIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1711101 - COLONOSCOPIA"
            },
            {
                "codigo": "1712001",
                "descricao": "ENDOSCOPIA DIGESTIVA ALTA ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1712001 - ENDOSCOPIA DIGESTIVA ALTA ADULTO"
            },
            {
                "codigo": "1712018",
                "descricao": "ENDOSCOPIA DIGESTIVA ALTA ADULTO - LIGADURA ELASTICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1712018 - ENDOSCOPIA DIGESTIVA ALTA ADULTO - LIGADURA ELASTICA"
            },
            {
                "codigo": "3100003",
                "descricao": "RESSONANCIA MAGNETICA DE ARTICULACAO COXO-FEMURAL (BILATERAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100003 - RESSONANCIA MAGNETICA DE ARTICULACAO COXO-FEMURAL (BILATERAL)"
            },
            {
                "codigo": "3100004",
                "descricao": "RESSONANCIA MAGNETICA DE COLUNA CERVICAL                    ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100004 - RESSONANCIA MAGNETICA DE COLUNA CERVICAL                    "
            },
            {
                "codigo": "3100005",
                "descricao": "RESSONANCIA MAGNETICA DE COLUNA LOMBO-SACRA                 ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100005 - RESSONANCIA MAGNETICA DE COLUNA LOMBO-SACRA                 "
            },
            {
                "codigo": "3100006",
                "descricao": "RESSONANCIA MAGNETICA DE COLUNA TORACICA                    ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100006 - RESSONANCIA MAGNETICA DE COLUNA TORACICA                    "
            },
            {
                "codigo": "3100014",
                "descricao": "RESSONANCIA MAGNETICA DE ABDOMEN SUPERIOR                   ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100014 - RESSONANCIA MAGNETICA DE ABDOMEN SUPERIOR                   "
            },
            {
                "codigo": "3100017",
                "descricao": "RESSONANCIA MAGNETICA DE TORAX                              ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100017 - RESSONANCIA MAGNETICA DE TORAX                              "
            },
            {
                "codigo": "3100026",
                "descricao": "RESSONANCIA MAGNETICA DE OMBRO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100026 - RESSONANCIA MAGNETICA DE OMBRO ESQUERDO"
            },
            {
                "codigo": "3100027",
                "descricao": "RESSONANCIA MAGNETICA DE OMBRO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100027 - RESSONANCIA MAGNETICA DE OMBRO DIREITO"
            },
            {
                "codigo": "3100034",
                "descricao": "RESSONANCIA MAGNETICA DE CRANIO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100034 - RESSONANCIA MAGNETICA DE CRANIO"
            },
            {
                "codigo": "3100040",
                "descricao": "RESSONANCIA MAGNETICA DE BASE DO CRANIO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100040 - RESSONANCIA MAGNETICA DE BASE DO CRANIO"
            },
            {
                "codigo": "3100051",
                "descricao": "RESSONANCIA MAGNETICA DE COXA ESQUERDA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100051 - RESSONANCIA MAGNETICA DE COXA ESQUERDA"
            },
            {
                "codigo": "3100056",
                "descricao": "RESSONANCIA MAGNETICA DE FACE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100056 - RESSONANCIA MAGNETICA DE FACE"
            },
            {
                "codigo": "3100059",
                "descricao": "RESSONANCIA MAGNETICA DE MAO DIREITA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100059 - RESSONANCIA MAGNETICA DE MAO DIREITA"
            },
            {
                "codigo": "3100069",
                "descricao": "RESSONANCIA MAGNETICA DE PERNA ESQUERDA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100069 - RESSONANCIA MAGNETICA DE PERNA ESQUERDA"
            },
            {
                "codigo": "3100071",
                "descricao": "RESSONANCIA MAGNETICA DE PUNHO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100071 - RESSONANCIA MAGNETICA DE PUNHO ESQUERDO"
            },
            {
                "codigo": "3100072",
                "descricao": "RESSONANCIA MAGNETICA DE QUADRIL DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100072 - RESSONANCIA MAGNETICA DE QUADRIL DIREITO"
            },
            {
                "codigo": "3100077",
                "descricao": "RESSONANCIA MAGNETICA DE SACRO-COCCIX",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100077 - RESSONANCIA MAGNETICA DE SACRO-COCCIX"
            },
            {
                "codigo": "3100078",
                "descricao": "RESSONANCIA MAGNETICA DE SACRO-ILIACAS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100078 - RESSONANCIA MAGNETICA DE SACRO-ILIACAS"
            },
            {
                "codigo": "3100089",
                "descricao": "RESSONANCIA MAGNETICA DE MEMBRO INFERIOR - DIREITO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100089 - RESSONANCIA MAGNETICA DE MEMBRO INFERIOR - DIREITO "
            },
            {
                "codigo": "3100090",
                "descricao": "RESSONANCIA MAGNETICA DE MEMBRO INFERIOR - ESQUERDO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100090 - RESSONANCIA MAGNETICA DE MEMBRO INFERIOR - ESQUERDO "
            },
            {
                "codigo": "3100091",
                "descricao": "RESSONANCIA MAGNETICA DE MEMBRO SUPERIOR - DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100091 - RESSONANCIA MAGNETICA DE MEMBRO SUPERIOR - DIREITO"
            },
            {
                "codigo": "3100092",
                "descricao": "RESSONANCIA MAGNETICA DE MEMBRO SUPERIOR - ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100092 - RESSONANCIA MAGNETICA DE MEMBRO SUPERIOR - ESQUERDO"
            },
            {
                "codigo": "3100230",
                "descricao": "RESSONANCIA MAGNETICA DE COLUNA LOMBAR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100230 - RESSONANCIA MAGNETICA DE COLUNA LOMBAR"
            },
            {
                "codigo": "3100241",
                "descricao": "RESSONÂNCIA MAGNÉTICA DE PELVE FEMININA SEM CONTRASTE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100241 - RESSONÂNCIA MAGNÉTICA DE PELVE FEMININA SEM CONTRASTE"
            },
            {
                "codigo": "3100244",
                "descricao": "RESSONÂNCIA MAGNÉTICA DE PELVE MASCULINA SEM CONTRASTE ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100244 - RESSONÂNCIA MAGNÉTICA DE PELVE MASCULINA SEM CONTRASTE "
            },
            {
                "codigo": "3100533",
                "descricao": "RESSONANCIA MAGNETICA DE SELA TURCICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100533 - RESSONANCIA MAGNETICA DE SELA TURCICA"
            },
            {
                "codigo": "3100916",
                "descricao": "RESSONANCIA MAGNETICA DE ABDOMEN SUPERIOR COM CONTRASTE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100916 - RESSONANCIA MAGNETICA DE ABDOMEN SUPERIOR COM CONTRASTE"
            },
            {
                "codigo": "3100953",
                "descricao": "RESSONANCIA MAGNETICA DE BACIA / PELVE / ABDOMEN INFERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100953 - RESSONANCIA MAGNETICA DE BACIA / PELVE / ABDOMEN INFERIOR"
            },
            {
                "codigo": "3201001",
                "descricao": "APAC - DENSITOMETRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3201001 - APAC - DENSITOMETRIA"
            },
            {
                "codigo": "3500002",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA  DE CRANIO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500002 - TOMOGRAFIA COMPUTADORIZADA  DE CRANIO"
            },
            {
                "codigo": "3500003",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO TORAX                         ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500003 - TOMOGRAFIA COMPUTADORIZADA DO TORAX                         "
            },
            {
                "codigo": "3500004",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  SUPERIOR             ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500004 - TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  SUPERIOR             "
            },
            {
                "codigo": "3500005",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE FACE / SEIOS DA FACE / ARTICULACOES TEMPORO-MADIBULARES",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500005 - TOMOGRAFIA COMPUTADORIZADA DE FACE / SEIOS DA FACE / ARTICULACOES TEMPORO-MADIBULARES"
            },
            {
                "codigo": "3500018",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  INFERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500018 - TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  INFERIOR"
            },
            {
                "codigo": "3500025",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA  COLUNA CERVICAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500025 - TOMOGRAFIA COMPUTADORIZADA  COLUNA CERVICAL"
            },
            {
                "codigo": "3500027",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA COLUNA LOMBAR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500027 - TOMOGRAFIA COMPUTADORIZADA COLUNA LOMBAR"
            },
            {
                "codigo": "3500063",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN SUPERIOR COM CONTRASTE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500063 - TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN SUPERIOR COM CONTRASTE"
            },
            {
                "codigo": "3500070",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE MASTOIDES OU OUVIDOS ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500070 - TOMOGRAFIA COMPUTADORIZADA DE MASTOIDES OU OUVIDOS "
            },
            {
                "codigo": "3500076",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE COLUNA LOMBO-SACRA C/ OU S/ CONTRAS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500076 - TOMOGRAFIA COMPUTADORIZADA DE COLUNA LOMBO-SACRA C/ OU S/ CONTRAS"
            },
            {
                "codigo": "3500077",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA  DE CRANIO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500077 - TOMOGRAFIA COMPUTADORIZADA  DE CRANIO"
            },
            {
                "codigo": "3500081",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN INFERIOR COM CONTRASTE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500081 - TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN INFERIOR COM CONTRASTE"
            },
            {
                "codigo": "3500113",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500113 - TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  "
            },
            {
                "codigo": "3500119",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE PELVE / BACIA / ABDOMEN INFERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500119 - TOMOGRAFIA COMPUTADORIZADA DE PELVE / BACIA / ABDOMEN INFERIOR"
            },
            {
                "codigo": "3500231",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE ABDOMEN SUPERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500231 - TOMOGRAFIA COMPUTADORIZADA DE ABDOMEN SUPERIOR"
            },
            {
                "codigo": "3500234",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE ARTICULACOES DE MEMBRO INFERIOR ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500234 - TOMOGRAFIA COMPUTADORIZADA DE ARTICULACOES DE MEMBRO INFERIOR ESQUERDO"
            },
            {
                "codigo": "3500912",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE COLUNA LOMBO-SACRA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500912 - TOMOGRAFIA COMPUTADORIZADA DE COLUNA LOMBO-SACRA"
            },
            {
                "codigo": "3500913",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE COLUNA LOMBO-SACRA COM CONTRASTE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500913 - TOMOGRAFIA COMPUTADORIZADA DE COLUNA LOMBO-SACRA COM CONTRASTE"
            },
            {
                "codigo": "3500917",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE COLUNA TORACICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500917 - TOMOGRAFIA COMPUTADORIZADA DE COLUNA TORACICA"
            },
            {
                "codigo": "3510005",
                "descricao": "TC DE CRANIO ADULTO SEM SEDACAO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3510005 - TC DE CRANIO ADULTO SEM SEDACAO"
            },
            {
                "codigo": "3510009",
                "descricao": "TC DO TORAX ADULTO SEM SEDACAO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3510009 - TC DO TORAX ADULTO SEM SEDACAO"
            },
            {
                "codigo": "9000003",
                "descricao": "CATETERISMO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "9000003 - CATETERISMO "
            },
            {
                "codigo": null,
                "descricao": null,
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": ""
            }
        ]
    }

    DadosCirurgia: any = {
        "message": "Código do procedimento",
        "result": [
            {
                "codigo": "0401020053",
                "descricao": "EXCISAO E SUTURA DE LESAO NA PELE C/ PLASTICA EM Z OU ROTACAO DE RETALHO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0401020053 - EXCISAO E SUTURA DE LESAO NA PELE C/ PLASTICA EM Z OU ROTACAO DE RETALHO"
            },
            {
                "codigo": "0401020070",
                "descricao": "EXERESE DE CISTO DERMOIDE                                                                                                                                                                                                                                 ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0401020070 - EXERESE DE CISTO DERMOIDE                                                                                                                                                                                                                                 "
            },
            {
                "codigo": "0401020088",
                "descricao": "EXERESE DE CISTO SACRO-COCCIGEO                                                                                                                                                                                                                           ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0401020088 - EXERESE DE CISTO SACRO-COCCIGEO                                                                                                                                                                                                                           "
            },
            {
                "codigo": "0401020100",
                "descricao": "EXTIRPACAO E SUPRESSAO DE LESAO DE PELE E DE TECIDO CELULAR SUBCUTANEO                                                                                                                                                                                    ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0401020100 - EXTIRPACAO E SUPRESSAO DE LESAO DE PELE E DE TECIDO CELULAR SUBCUTANEO                                                                                                                                                                                    "
            },
            {
                "codigo": "0401020150",
                "descricao": "TRATAMENTO CIRURGICO DO SINUS PRE-AURICULAR                                                                                                                                                                                                               ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0401020150 - TRATAMENTO CIRURGICO DO SINUS PRE-AURICULAR                                                                                                                                                                                                               "
            },
            {
                "codigo": "0404010016",
                "descricao": "ADENOIDECTOMIA                                                                                                                                                                                                                                            ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0404010016 - ADENOIDECTOMIA                                                                                                                                                                                                                                            "
            },
            {
                "codigo": "0404010032",
                "descricao": "AMIGDALECTOMIA C/ ADENOIDECTOMIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0404010032 - AMIGDALECTOMIA C/ ADENOIDECTOMIA"
            },
            {
                "codigo": "0404010237",
                "descricao": "MICROCIRURGIA OTOLOGICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0404010237 - MICROCIRURGIA OTOLOGICA"
            },
            {
                "codigo": "0406030030",
                "descricao": "ANGIOPLASTIA CORONARIANA COM IMPLANTE DE STENT",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0406030030 - ANGIOPLASTIA CORONARIANA COM IMPLANTE DE STENT"
            },
            {
                "codigo": "0407010211",
                "descricao": "GASTROSTOMIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407010211 - GASTROSTOMIA"
            },
            {
                "codigo": "0407010297",
                "descricao": "TRATAMENTO CIRURGICO DE REFLUXO GASTROESOFAGICO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407010297 - TRATAMENTO CIRURGICO DE REFLUXO GASTROESOFAGICO"
            },
            {
                "codigo": "0407020217",
                "descricao": "ESFINCTEROTOMIA INTERNA E TRATAMENTO DE FISSURA ANAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407020217 - ESFINCTEROTOMIA INTERNA E TRATAMENTO DE FISSURA ANAL"
            },
            {
                "codigo": "0407020241",
                "descricao": "FECHAMENTO DE ENTEROSTOMIA (QUALQUER SEGMENTO)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407020241 - FECHAMENTO DE ENTEROSTOMIA (QUALQUER SEGMENTO)"
            },
            {
                "codigo": "0407020322",
                "descricao": "PLASTICA ANAL EXTERNA / ESFINCTEROPLASTIA ANAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407020322 - PLASTICA ANAL EXTERNA / ESFINCTEROPLASTIA ANAL"
            },
            {
                "codigo": "0407020411",
                "descricao": "RETOSSIGMOIDECTOMIA ABDOMINO-PERINEAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407020411 - RETOSSIGMOIDECTOMIA ABDOMINO-PERINEAL"
            },
            {
                "codigo": "0407030034",
                "descricao": "COLECISTECTOMIA VIDEOLAPAROSCOPICA                                                                                                                                                                                                                        ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407030034 - COLECISTECTOMIA VIDEOLAPAROSCOPICA                                                                                                                                                                                                                        "
            },
            {
                "codigo": "0407040064",
                "descricao": "HERNIOPLASTIA EPIGASTRICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407040064 - HERNIOPLASTIA EPIGASTRICA"
            },
            {
                "codigo": "0407040080",
                "descricao": "HERNIOPLASTIA INCISIONAL                                                                                                                                                                                                                                  ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407040080 - HERNIOPLASTIA INCISIONAL                                                                                                                                                                                                                                  "
            },
            {
                "codigo": "0407040099",
                "descricao": "HERNIOPLASTIA INGUINAL (BILATERAL)                                                                                                                                                                                                                        ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407040099 - HERNIOPLASTIA INGUINAL (BILATERAL)                                                                                                                                                                                                                        "
            },
            {
                "codigo": "0407040102",
                "descricao": "HERNIOPLASTIA INGUINAL / CRURAL (UNILATERAL)                                                                                                                                                                                                              ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407040102 - HERNIOPLASTIA INGUINAL / CRURAL (UNILATERAL)                                                                                                                                                                                                              "
            },
            {
                "codigo": "0407040129",
                "descricao": "HERNIOPLASTIA UMBILICAL                                                                                                                                                                                                                                   ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407040129 - HERNIOPLASTIA UMBILICAL                                                                                                                                                                                                                                   "
            },
            {
                "codigo": "0407040137",
                "descricao": "HERNIORRAFIA INGUINAL VIDEOLAPAROSCOPICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407040137 - HERNIORRAFIA INGUINAL VIDEOLAPAROSCOPICA"
            },
            {
                "codigo": "0408020326",
                "descricao": "TRATAMENTO CIRÚRGICO DE DEDO EM GATILHO                                                                                                                                                                                                                   ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0408020326 - TRATAMENTO CIRÚRGICO DE DEDO EM GATILHO                                                                                                                                                                                                                   "
            },
            {
                "codigo": "0408020555",
                "descricao": "TRATAMENTO CIRURGICO DE PSEUDARTROSE / RETARDO DE CONSOLIDACAO / PERDA OSSEA DA MAO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0408020555 - TRATAMENTO CIRURGICO DE PSEUDARTROSE / RETARDO DE CONSOLIDACAO / PERDA OSSEA DA MAO"
            },
            {
                "codigo": "0408020628",
                "descricao": "TRATAMENTO CIRURGICO DE SINDACTILIA DA MAO (POR ESPACO INTERDIGITAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0408020628 - TRATAMENTO CIRURGICO DE SINDACTILIA DA MAO (POR ESPACO INTERDIGITAL)"
            },
            {
                "codigo": "0408050764",
                "descricao": "TRATAMENTO CIRURGICO DE PE TORTO CONGENITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0408050764 - TRATAMENTO CIRURGICO DE PE TORTO CONGENITO"
            },
            {
                "codigo": "0408060018",
                "descricao": "ALONGAMENTO / ENCURTAMENTO MIOTENDINOSO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0408060018 - ALONGAMENTO / ENCURTAMENTO MIOTENDINOSO"
            },
            {
                "codigo": "0408060212",
                "descricao": "RESSECÇÃO DE CISTO SINOVIAL                                                                                                                                                                                                                              ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0408060212 - RESSECÇÃO DE CISTO SINOVIAL                                                                                                                                                                                                                              "
            },
            {
                "codigo": "0408060310",
                "descricao": "RESSECCAO SIMPLES DE TUMOR OSSEO / DE PARTES MOLES",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0408060310 - RESSECCAO SIMPLES DE TUMOR OSSEO / DE PARTES MOLES"
            },
            {
                "codigo": "0408060352",
                "descricao": "RETIRADA DE FIO OU PINO INTRA-ÓSSEO                                                                                                                                                                                                                       ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0408060352 - RETIRADA DE FIO OU PINO INTRA-ÓSSEO                                                                                                                                                                                                                       "
            },
            {
                "codigo": "0408060662",
                "descricao": "TRATAMENTO CIRURGICO DE POLIDACTILIA ARTICULADA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0408060662 - TRATAMENTO CIRURGICO DE POLIDACTILIA ARTICULADA"
            },
            {
                "codigo": "0408060700",
                "descricao": "TRATAMENTO CIRÚRGICO DE SINDACTILIA SIMPLES (DOIS DEDOS)                                                                                                                                                                                                  ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0408060700 - TRATAMENTO CIRÚRGICO DE SINDACTILIA SIMPLES (DOIS DEDOS)                                                                                                                                                                                                  "
            },
            {
                "codigo": "0409010324",
                "descricao": "PIELOPLASTIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409010324 - PIELOPLASTIA"
            },
            {
                "codigo": "0409010430",
                "descricao": "TRATAMENTO CIRURGICO DE CISTOCELE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409010430 - TRATAMENTO CIRURGICO DE CISTOCELE"
            },
            {
                "codigo": "0409020079",
                "descricao": "MEATOTOMIA SIMPLES",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409020079 - MEATOTOMIA SIMPLES"
            },
            {
                "codigo": "0409020176",
                "descricao": "URETROTOMIA INTERNA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409020176 - URETROTOMIA INTERNA"
            },
            {
                "codigo": "0409040126",
                "descricao": "ORQUIDOPEXIA BILATERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409040126 - ORQUIDOPEXIA BILATERAL"
            },
            {
                "codigo": "0409040134",
                "descricao": "ORQUIDOPEXIA UNILATERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409040134 - ORQUIDOPEXIA UNILATERAL"
            },
            {
                "codigo": "0409040215",
                "descricao": "TRATAMENTO CIRURGICO DE HIDROCELE                                                                                                                                                                                                                         ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409040215 - TRATAMENTO CIRURGICO DE HIDROCELE                                                                                                                                                                                                                         "
            },
            {
                "codigo": "0409040231",
                "descricao": "TRATAMENTO CIRURGICO DE VARICOCELE                                                                                                                                                                                                                        ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409040231 - TRATAMENTO CIRURGICO DE VARICOCELE                                                                                                                                                                                                                        "
            },
            {
                "codigo": "0409050032",
                "descricao": "CORRECAO DE HIPOSPADIA (1O TEMPO)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409050032 - CORRECAO DE HIPOSPADIA (1O TEMPO)"
            },
            {
                "codigo": "0409050083",
                "descricao": "POSTECTOMIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409050083 - POSTECTOMIA"
            },
            {
                "codigo": "0409060038",
                "descricao": "EXCISAO TIPO 3 DO COLO UTERINO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409060038 - EXCISAO TIPO 3 DO COLO UTERINO"
            },
            {
                "codigo": "0409060046",
                "descricao": "CURETAGEM SEMIOTICA C/ OU S/ DILATACAO DO COLO DO UTERO                                                                                                                                                                                                   ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409060046 - CURETAGEM SEMIOTICA C/ OU S/ DILATACAO DO COLO DO UTERO                                                                                                                                                                                                   "
            },
            {
                "codigo": "0409060100",
                "descricao": "HISTERECTOMIA (POR VIA VAGINAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409060100 - HISTERECTOMIA (POR VIA VAGINAL)"
            },
            {
                "codigo": "0409060119",
                "descricao": "HISTERECTOMIA C/ ANEXECTOMIA (UNI / BILATERAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409060119 - HISTERECTOMIA C/ ANEXECTOMIA (UNI / BILATERAL)"
            },
            {
                "codigo": "0409060127",
                "descricao": "HISTERECTOMIA SUBTOTAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409060127 - HISTERECTOMIA SUBTOTAL"
            },
            {
                "codigo": "0409060135",
                "descricao": "HISTERECTOMIA TOTAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409060135 - HISTERECTOMIA TOTAL"
            },
            {
                "codigo": "0409060186",
                "descricao": "LAQUEADURA TUBARIA                                                                                                                                                                                                                                        ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409060186 - LAQUEADURA TUBARIA                                                                                                                                                                                                                                        "
            },
            {
                "codigo": "0409060194",
                "descricao": "MIOMECTOMIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409060194 - MIOMECTOMIA"
            },
            {
                "codigo": "0409060216",
                "descricao": "OOFORECTOMIA / OOFOROPLASTIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409060216 - OOFORECTOMIA / OOFOROPLASTIA"
            },
            {
                "codigo": "0409070033",
                "descricao": "COLPOCLEISE (CIRURGIA DE LE FORT)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409070033 - COLPOCLEISE (CIRURGIA DE LE FORT)"
            },
            {
                "codigo": "0409070050",
                "descricao": "COLPOPERINEOPLASTIA ANTERIOR E POSTERIOR                                                                                                                                                                                                                  ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409070050 - COLPOPERINEOPLASTIA ANTERIOR E POSTERIOR                                                                                                                                                                                                                  "
            },
            {
                "codigo": "0409070068",
                "descricao": "COLPOPERINEOPLASTIA POSTERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409070068 - COLPOPERINEOPLASTIA POSTERIOR"
            },
            {
                "codigo": "0409070084",
                "descricao": "COLPOPLASTIA ANTERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409070084 - COLPOPLASTIA ANTERIOR"
            },
            {
                "codigo": "0409070149",
                "descricao": "EXERESE DE CISTO VAGINAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409070149 - EXERESE DE CISTO VAGINAL"
            },
            {
                "codigo": "0409070157",
                "descricao": "EXERESE DE GLANDULA DE BARTHOLIN / SKENE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409070157 - EXERESE DE GLANDULA DE BARTHOLIN / SKENE"
            },
            {
                "codigo": "0409070220",
                "descricao": "TRATAMENTO CIRURGICO DE COAPTACAO DE NINFAS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409070220 - TRATAMENTO CIRURGICO DE COAPTACAO DE NINFAS"
            },
            {
                "codigo": "0409070262",
                "descricao": "TRATAMENTO CIRURGICO DE HIPERTROFIA DOS PEQUENOS LABIOS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0409070262 - TRATAMENTO CIRURGICO DE HIPERTROFIA DOS PEQUENOS LABIOS"
            },
            {
                "codigo": "0414020413",
                "descricao": "TRATAMENTO ODONTOLOGICO PARA PACIENTES COM NECESSIDADES ESPECIAIS                                                                                                                                                                                         ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0414020413 - TRATAMENTO ODONTOLOGICO PARA PACIENTES COM NECESSIDADES ESPECIAIS                                                                                                                                                                                         "
            },
            {
                "codigo": "0415010012",
                "descricao": "TRATAMENTO C/ CIRURGIAS MULTIPLAS                                                                                                                                                                                                                         ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0415010012 - TRATAMENTO C/ CIRURGIAS MULTIPLAS                                                                                                                                                                                                                         "
            }
        ]
    }

    DadosExame: any = {
        "message": "Código do procedimento",
        "result": [
            {
                "codigo": "0002001",
                "descricao": "CONSULTA EM ANGIOLOGIA GERAL - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0002001 - CONSULTA EM ANGIOLOGIA GERAL - ADULTO"
            },
            {
                "codigo": "0009001",
                "descricao": "CONSULTA EM GINECOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0009001 - CONSULTA EM GINECOLOGIA - GERAL"
            },
            {
                "codigo": "0037002",
                "descricao": "CONSULTA EM CARDIOLOGIA ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0037002 - CONSULTA EM CARDIOLOGIA "
            },
            {
                "codigo": "0065002",
                "descricao": "EXAME ANATOMO-PATOLOGICO P/ CONGELAMENTO / PARAFINA (EXCETO COLO UTERINO) - PECA CIRURGICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0065002 - EXAME ANATOMO-PATOLOGICO P/ CONGELAMENTO / PARAFINA (EXCETO COLO UTERINO) - PECA CIRURGICA"
            },
            {
                "codigo": "0065005",
                "descricao": "IMUNOHISTOQUIMICA DE NEOPLASIAS MALIGNAS ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0065005 - IMUNOHISTOQUIMICA DE NEOPLASIAS MALIGNAS "
            },
            {
                "codigo": "0066005",
                "descricao": "EXAME CITOPATOLOGICO CERVICO-VAGINAL /MICROFLORA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0066005 - EXAME CITOPATOLOGICO CERVICO-VAGINAL /MICROFLORA"
            },
            {
                "codigo": "0066006",
                "descricao": "CITOPATOLOGICO CERVICO VAGINAL DE RASTREAMENTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0066006 - CITOPATOLOGICO CERVICO VAGINAL DE RASTREAMENTO"
            },
            {
                "codigo": "0101001",
                "descricao": "CONSULTA DE PROFISSIONAIS DE NIVEL SUPERIOR NA ATENCAO BASICA (EXCETO MEDICO)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0101001 - CONSULTA DE PROFISSIONAIS DE NIVEL SUPERIOR NA ATENCAO BASICA (EXCETO MEDICO)"
            },
            {
                "codigo": "0111001",
                "descricao": "CONSULTA EM PROTESE DENTARIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0111001 - CONSULTA EM PROTESE DENTARIA"
            },
            {
                "codigo": "0120088",
                "descricao": "PROTESE PARCIAL TEMPORARIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0120088 - PROTESE PARCIAL TEMPORARIA"
            },
            {
                "codigo": "0140016",
                "descricao": "CONSULTA PARA AVALIACAO DE HEMODIALISE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0140016 - CONSULTA PARA AVALIACAO DE HEMODIALISE"
            },
            {
                "codigo": "0140021",
                "descricao": "CONSULTA EM TRIAGEM -CAPD",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0140021 - CONSULTA EM TRIAGEM -CAPD"
            },
            {
                "codigo": "0149004",
                "descricao": "ULTRA-SONOGRAFIA DE ARTICULACAO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0149004 - ULTRA-SONOGRAFIA DE ARTICULACAO"
            },
            {
                "codigo": "0149009",
                "descricao": "ULTRA-SONOGRAFIA PELVICA (GINECOLOGICA)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0149009 - ULTRA-SONOGRAFIA PELVICA (GINECOLOGICA)"
            },
            {
                "codigo": "0210004",
                "descricao": "ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITACAO DO DESENVOLVIMENTO NEUROPSICOMOTOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0210004 - ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITACAO DO DESENVOLVIMENTO NEUROPSICOMOTOR"
            },
            {
                "codigo": "0210028",
                "descricao": "CONSULTA EM PSICOLOGIA - BARIATRICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0210028 - CONSULTA EM PSICOLOGIA - BARIATRICA"
            },
            {
                "codigo": "0219003",
                "descricao": "ELETROENCEFALOGRAMA EM VIGILIA C/OU S/FOTO-ESTIMULO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0219003 - ELETROENCEFALOGRAMA EM VIGILIA C/OU S/FOTO-ESTIMULO"
            },
            {
                "codigo": "0231012",
                "descricao": "USG MAMARIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0231012 - USG MAMARIA"
            },
            {
                "codigo": "0288001",
                "descricao": "CONSULTA EM FISIOTERAPIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0288001 - CONSULTA EM FISIOTERAPIA"
            },
            {
                "codigo": "0299010",
                "descricao": "CONSULTA EM CIRURGIA VASCULAR- ENDOVASCULAR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0299010 - CONSULTA EM CIRURGIA VASCULAR- ENDOVASCULAR"
            },
            {
                "codigo": "0311004",
                "descricao": "FISIOTERAPIA PEDIATRICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0311004 - FISIOTERAPIA PEDIATRICA"
            },
            {
                "codigo": "0320060",
                "descricao": "CONSULTA EM CIRURGIA GINECOLOGICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0320060 - CONSULTA EM CIRURGIA GINECOLOGICA"
            },
            {
                "codigo": "0320120",
                "descricao": "CONSULTA EM NEUROLOGIA - PEDIATRICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0320120 - CONSULTA EM NEUROLOGIA - PEDIATRICA"
            },
            {
                "codigo": "0403046",
                "descricao": "BIOPSIA PERCUTANEA ORIENTADA POR TC / US / RM / RX",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0403046 - BIOPSIA PERCUTANEA ORIENTADA POR TC / US / RM / RX"
            },
            {
                "codigo": "0404165",
                "descricao": "TOMOGRAFIA POR EMISSÃO DE PÓSITRONS (PET-CT) - ONCOLOGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0404165 - TOMOGRAFIA POR EMISSÃO DE PÓSITRONS (PET-CT) - ONCOLOGIA"
            },
            {
                "codigo": "0406007",
                "descricao": "CONSULTA EM HEMATOLOGIA - ONCOLOGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0406007 - CONSULTA EM HEMATOLOGIA - ONCOLOGIA"
            },
            {
                "codigo": "0407046",
                "descricao": "ELETRONEUROMIOGRAFIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0407046 - ELETRONEUROMIOGRAFIA"
            },
            {
                "codigo": "0701001",
                "descricao": "CONSULTA EM ENDODONTIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701001 - CONSULTA EM ENDODONTIA"
            },
            {
                "codigo": "0701002",
                "descricao": "CONSULTA EM PERIODONTIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701002 - CONSULTA EM PERIODONTIA"
            },
            {
                "codigo": "0701003",
                "descricao": "CONSULTA EM BUCO-MAXILO FACIAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701003 - CONSULTA EM BUCO-MAXILO FACIAL"
            },
            {
                "codigo": "0701010",
                "descricao": "CONSULTA EM CIRURGIA GERAL - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701010 - CONSULTA EM CIRURGIA GERAL - ADULTO"
            },
            {
                "codigo": "0701011",
                "descricao": "CONSULTA EM CIRURGIA GERAL - PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701011 - CONSULTA EM CIRURGIA GERAL - PEDIATRIA"
            },
            {
                "codigo": "0701085",
                "descricao": "CONSULTA EM OFTALMOLOGIA - RETORNO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701085 - CONSULTA EM OFTALMOLOGIA - RETORNO"
            },
            {
                "codigo": "0701138",
                "descricao": "CONSULTA EM NEUROCIRURGIA ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701138 - CONSULTA EM NEUROCIRURGIA ADULTO"
            },
            {
                "codigo": "0701194",
                "descricao": "CONSULTA EM CIRURGIA DA CABECA E PESCOCO ONCOLOGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701194 - CONSULTA EM CIRURGIA DA CABECA E PESCOCO ONCOLOGIA"
            },
            {
                "codigo": "0701202",
                "descricao": "CONSULTA EM ALERGIA E IMUNOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701202 - CONSULTA EM ALERGIA E IMUNOLOGIA - GERAL"
            },
            {
                "codigo": "0701206",
                "descricao": "CONSULTA EM CIRURGIA DE CABECA E PESCOCO - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701206 - CONSULTA EM CIRURGIA DE CABECA E PESCOCO - GERAL"
            },
            {
                "codigo": "0701212",
                "descricao": "CONSULTA EM DERMATOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701212 - CONSULTA EM DERMATOLOGIA - GERAL"
            },
            {
                "codigo": "0701215",
                "descricao": "CONSULTA EM GASTROENTEROLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701215 - CONSULTA EM GASTROENTEROLOGIA - GERAL"
            },
            {
                "codigo": "0701216",
                "descricao": "CONSULTA EM GASTROENTEROLOGIA - PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701216 - CONSULTA EM GASTROENTEROLOGIA - PEDIATRIA"
            },
            {
                "codigo": "0701218",
                "descricao": "CONSULTA EM HEMATOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701218 - CONSULTA EM HEMATOLOGIA - GERAL"
            },
            {
                "codigo": "0701222",
                "descricao": "CONSULTA EM NEFROLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701222 - CONSULTA EM NEFROLOGIA - GERAL"
            },
            {
                "codigo": "0701224",
                "descricao": "CONSULTA EM NEUROLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701224 - CONSULTA EM NEUROLOGIA - GERAL"
            },
            {
                "codigo": "0701225",
                "descricao": "CONSULTA EM OFTALMOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701225 - CONSULTA EM OFTALMOLOGIA - GERAL"
            },
            {
                "codigo": "0701226",
                "descricao": "CONSULTA EM ORTOPEDIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701226 - CONSULTA EM ORTOPEDIA - GERAL"
            },
            {
                "codigo": "0701227",
                "descricao": "CONSULTA EM OTORRINOLARINGOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701227 - CONSULTA EM OTORRINOLARINGOLOGIA - GERAL"
            },
            {
                "codigo": "0701228",
                "descricao": "CONSULTA EM PNEUMOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701228 - CONSULTA EM PNEUMOLOGIA - GERAL"
            },
            {
                "codigo": "0701229",
                "descricao": "CONSULTA EM PROCTOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701229 - CONSULTA EM PROCTOLOGIA - GERAL"
            },
            {
                "codigo": "0701231",
                "descricao": "CONSULTA EM REUMATOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701231 - CONSULTA EM REUMATOLOGIA - GERAL"
            },
            {
                "codigo": "0701233",
                "descricao": "CONSULTA EM UROLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701233 - CONSULTA EM UROLOGIA - GERAL"
            },
            {
                "codigo": "0701236",
                "descricao": "CONSULTA EM ENDOCRINOLOGIA - PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701236 - CONSULTA EM ENDOCRINOLOGIA - PEDIATRIA"
            },
            {
                "codigo": "0701243",
                "descricao": "CONSULTA EM FONOAUDIOLOGIA - INFANTIL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701243 - CONSULTA EM FONOAUDIOLOGIA - INFANTIL"
            },
            {
                "codigo": "0701245",
                "descricao": "CONSULTA  EM ORTOPEDIA - PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701245 - CONSULTA  EM ORTOPEDIA - PEDIATRIA"
            },
            {
                "codigo": "0701252",
                "descricao": "CONSULTA EM MASTOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701252 - CONSULTA EM MASTOLOGIA - GERAL"
            },
            {
                "codigo": "0701260",
                "descricao": "CONSULTA EM PSIQUIATRIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701260 - CONSULTA EM PSIQUIATRIA - GERAL"
            },
            {
                "codigo": "0701261",
                "descricao": "CONSULTA EM GERIATRIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701261 - CONSULTA EM GERIATRIA - GERAL"
            },
            {
                "codigo": "0701281",
                "descricao": "ODONTO-CEO PACIENTES PORTADORES DE NECESSIDADES ESPECIAIS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701281 - ODONTO-CEO PACIENTES PORTADORES DE NECESSIDADES ESPECIAIS"
            },
            {
                "codigo": "0701304",
                "descricao": "CONSULTA EM ONCOLOGIA - PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701304 - CONSULTA EM ONCOLOGIA - PEDIATRIA"
            },
            {
                "codigo": "0701320",
                "descricao": "CONSULTA EM HEMATOLOGIA INFANTIL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701320 - CONSULTA EM HEMATOLOGIA INFANTIL"
            },
            {
                "codigo": "0701321",
                "descricao": "CONSULTA EM CIRURGIA TORACICA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701321 - CONSULTA EM CIRURGIA TORACICA - GERAL"
            },
            {
                "codigo": "0701328",
                "descricao": "CONSULTA EM UROLOGIA ONCOLOGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701328 - CONSULTA EM UROLOGIA ONCOLOGIA"
            },
            {
                "codigo": "0701339",
                "descricao": "CONSULTA EM PNEUMOLOGIA INFANTIL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701339 - CONSULTA EM PNEUMOLOGIA INFANTIL"
            },
            {
                "codigo": "0701344",
                "descricao": "CONSULTA EM CARDIOLOGIA - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701344 - CONSULTA EM CARDIOLOGIA - ADULTO"
            },
            {
                "codigo": "0701362",
                "descricao": "CONSULTA EM MASTOLOGIA ONCOLOGICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701362 - CONSULTA EM MASTOLOGIA ONCOLOGICA"
            },
            {
                "codigo": "0701363",
                "descricao": "CONSULTA EM ONCOLOGIA  CLINICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701363 - CONSULTA EM ONCOLOGIA  CLINICA"
            },
            {
                "codigo": "0701367",
                "descricao": "CONSULTA EM ODONTOLOGICA - ATM",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701367 - CONSULTA EM ODONTOLOGICA - ATM"
            },
            {
                "codigo": "0701378",
                "descricao": "CONSULTA EM NEUROLOGIA PEDIATRICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701378 - CONSULTA EM NEUROLOGIA PEDIATRICA"
            },
            {
                "codigo": "0701414",
                "descricao": "CONSULTA EM CIRURGIA VASCULAR - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701414 - CONSULTA EM CIRURGIA VASCULAR - ADULTO"
            },
            {
                "codigo": "0701492",
                "descricao": "CONSULTA EM CIRURGIA ONCOLOGICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701492 - CONSULTA EM CIRURGIA ONCOLOGICA"
            },
            {
                "codigo": "0701588",
                "descricao": "CONSULTA EM ORTOPEDIA PEDIATRICA (COLUNA)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701588 - CONSULTA EM ORTOPEDIA PEDIATRICA (COLUNA)"
            },
            {
                "codigo": "0701610",
                "descricao": "ELETROENCEFALOGRAMA ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701610 - ELETROENCEFALOGRAMA ADULTO"
            },
            {
                "codigo": "0701649",
                "descricao": "VIDEONASOLARINGOSCOPIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701649 - VIDEONASOLARINGOSCOPIA"
            },
            {
                "codigo": "0701650",
                "descricao": "ELETROENCEFALOGRAMA PEDIATRICO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701650 - ELETROENCEFALOGRAMA PEDIATRICO "
            },
            {
                "codigo": "0701713",
                "descricao": "CONSULTA EM ODONTOLOGIA - ORTODONTIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701713 - CONSULTA EM ODONTOLOGIA - ORTODONTIA"
            },
            {
                "codigo": "0701751",
                "descricao": "CONSULTA EM ODONTOLOGIA - PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701751 - CONSULTA EM ODONTOLOGIA - PEDIATRIA"
            },
            {
                "codigo": "0701764",
                "descricao": "CONSULTA EM BUCO-MAXILO - ESTOMATOLOGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701764 - CONSULTA EM BUCO-MAXILO - ESTOMATOLOGIA"
            },
            {
                "codigo": "0701802",
                "descricao": "CONSULTA EM NUTRICAO - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701802 - CONSULTA EM NUTRICAO - ADULTO"
            },
            {
                "codigo": "0701823",
                "descricao": "CONSULTA EM PEQUENAS CIRURGIAS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701823 - CONSULTA EM PEQUENAS CIRURGIAS"
            },
            {
                "codigo": "0701860",
                "descricao": "CONSULTA EM PRE-NATAL DE RISCO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701860 - CONSULTA EM PRE-NATAL DE RISCO"
            },
            {
                "codigo": "0701866",
                "descricao": "CONSULTA EM ONCOLOGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701866 - CONSULTA EM ONCOLOGIA"
            },
            {
                "codigo": "0701868",
                "descricao": "CONSULTA EM GINECOLOGIA - OBSTETRICIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701868 - CONSULTA EM GINECOLOGIA - OBSTETRICIA"
            },
            {
                "codigo": "0701875",
                "descricao": "CONSULTA EM CARDIOLOGIA - CIRURGIA CARDIACA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701875 - CONSULTA EM CARDIOLOGIA - CIRURGIA CARDIACA"
            },
            {
                "codigo": "0701907",
                "descricao": "CONSULTA EM CIRURGIA TORACICA - ONCOLOGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701907 - CONSULTA EM CIRURGIA TORACICA - ONCOLOGIA"
            },
            {
                "codigo": "0701941",
                "descricao": "CONSULTA EM NUTRICAO - PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701941 - CONSULTA EM NUTRICAO - PEDIATRIA"
            },
            {
                "codigo": "0701945",
                "descricao": "CONSULTA EM RADIOTERAPIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701945 - CONSULTA EM RADIOTERAPIA"
            },
            {
                "codigo": "0701965",
                "descricao": "CONSULTA EM OFTALMOLOGIA - CATARATA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701965 - CONSULTA EM OFTALMOLOGIA - CATARATA"
            },
            {
                "codigo": "0701972",
                "descricao": "CONSULTA EM DERMATOLOGIA - PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701972 - CONSULTA EM DERMATOLOGIA - PEDIATRIA"
            },
            {
                "codigo": "0701978",
                "descricao": "CONSULTA EM DERMATOLOGIA - CIRURGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701978 - CONSULTA EM DERMATOLOGIA - CIRURGIA"
            },
            {
                "codigo": "0701999",
                "descricao": "CONSULTA EM FONOAUDIOLOGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0701999 - CONSULTA EM FONOAUDIOLOGIA"
            },
            {
                "codigo": "0703280",
                "descricao": "CONSULTA EM OFTALMOLOGIA - CIRURGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0703280 - CONSULTA EM OFTALMOLOGIA - CIRURGIA"
            },
            {
                "codigo": "0703345",
                "descricao": "CONSULTA EM PROCTOLOGIA - ONCOLOGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0703345 - CONSULTA EM PROCTOLOGIA - ONCOLOGIA"
            },
            {
                "codigo": "0703399",
                "descricao": "CONSULTA EM CARDIOLOGIA - HEMODINAMICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0703399 - CONSULTA EM CARDIOLOGIA - HEMODINAMICA"
            },
            {
                "codigo": "0703455",
                "descricao": "CONSULTA EM CIRURGIA ORTOPEDIA - PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0703455 - CONSULTA EM CIRURGIA ORTOPEDIA - PEDIATRIA"
            },
            {
                "codigo": "0703692",
                "descricao": "CONSULTA EM ENFERMAGEM - AMBULATORIO DE FERIDAS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0703692 - CONSULTA EM ENFERMAGEM - AMBULATORIO DE FERIDAS"
            },
            {
                "codigo": "0705027",
                "descricao": "CONSULTA EM NUTRICAO - PRE NATAL - PRIMEIRA VEZ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0705027 - CONSULTA EM NUTRICAO - PRE NATAL - PRIMEIRA VEZ"
            },
            {
                "codigo": "0705085",
                "descricao": "ECOCARDIOGRAFIA TRANSEOFAGICA - PPI",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0705085 - ECOCARDIOGRAFIA TRANSEOFAGICA - PPI"
            },
            {
                "codigo": "0710285",
                "descricao": "CONSULTA EM NEUROCIRURGIA ENDOVASCULAR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710285 - CONSULTA EM NEUROCIRURGIA ENDOVASCULAR"
            },
            {
                "codigo": "0710589",
                "descricao": "ELETROCARDIOGRAMA - TELEMEDICINA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710589 - ELETROCARDIOGRAMA - TELEMEDICINA"
            },
            {
                "codigo": "0710765",
                "descricao": "CONSULTA PRE-OPERATORIA - CIRURGIA UROLOGICA - MUTIRAO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710765 - CONSULTA PRE-OPERATORIA - CIRURGIA UROLOGICA - MUTIRAO "
            },
            {
                "codigo": "0710881",
                "descricao": "CONSULTA EM ORTOPEDIA - MUTIRAO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710881 - CONSULTA EM ORTOPEDIA - MUTIRAO"
            },
            {
                "codigo": "0710897",
                "descricao": "CONSULTA EM ORTOPEDIA MAO - ALTA COMPLEXIDADE  ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710897 - CONSULTA EM ORTOPEDIA MAO - ALTA COMPLEXIDADE  "
            },
            {
                "codigo": "0710898",
                "descricao": "CONSULTA EM ORTOPEDIA MAO - MEDIA COMPLEXIDADE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710898 - CONSULTA EM ORTOPEDIA MAO - MEDIA COMPLEXIDADE"
            },
            {
                "codigo": "0710899",
                "descricao": "CONSULTA EM ORTOPEDIA OMBRO- ALTA COMPLEXIDADE ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710899 - CONSULTA EM ORTOPEDIA OMBRO- ALTA COMPLEXIDADE "
            },
            {
                "codigo": "0710901",
                "descricao": "CONSULTA EM ORTOPEDIA OMBRO - MEDIA COMPLEXIDADE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710901 - CONSULTA EM ORTOPEDIA OMBRO - MEDIA COMPLEXIDADE"
            },
            {
                "codigo": "0710902",
                "descricao": "CONSULTA EM ORTOPEDIA QUADRIL - ALTA COMPLEXIDADE ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710902 - CONSULTA EM ORTOPEDIA QUADRIL - ALTA COMPLEXIDADE "
            },
            {
                "codigo": "0710903",
                "descricao": "CONSULTA EM ORTOPEDIA QUADRIL - MEDIA COMPLEXIDADE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710903 - CONSULTA EM ORTOPEDIA QUADRIL - MEDIA COMPLEXIDADE"
            },
            {
                "codigo": "0710904",
                "descricao": "CONSULTA EM ORTOPEDIA PE/TORNOZELO- ALTA COMPLEXIDADE ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710904 - CONSULTA EM ORTOPEDIA PE/TORNOZELO- ALTA COMPLEXIDADE "
            },
            {
                "codigo": "0710906",
                "descricao": "CONSULTA EM ORTOPEDIA PE/TORNOZELO   MEDIA COMPLEXIDADE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710906 - CONSULTA EM ORTOPEDIA PE/TORNOZELO   MEDIA COMPLEXIDADE"
            },
            {
                "codigo": "0710907",
                "descricao": "CONSULTA EM ORTOPEDIA COLUNA - ALTA COMPLEXIDADE ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710907 - CONSULTA EM ORTOPEDIA COLUNA - ALTA COMPLEXIDADE "
            },
            {
                "codigo": "0710910",
                "descricao": "CONSULTA EM ORTOPEDIA COLUNA - MEDIA COMPLEXIDADE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710910 - CONSULTA EM ORTOPEDIA COLUNA - MEDIA COMPLEXIDADE"
            },
            {
                "codigo": "0710912",
                "descricao": "CONSULTA EM ORTOPEDIA JOELHO - ALTA COMPLEXIDADE ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710912 - CONSULTA EM ORTOPEDIA JOELHO - ALTA COMPLEXIDADE "
            },
            {
                "codigo": "0710963",
                "descricao": "POLISSONOGRAFIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710963 - POLISSONOGRAFIA"
            },
            {
                "codigo": "0710996",
                "descricao": "AUDIOMETRIA E IMITANCIOMETRIA - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0710996 - AUDIOMETRIA E IMITANCIOMETRIA - ADULTO"
            },
            {
                "codigo": "0712021",
                "descricao": "CONSULTA EM OFTALMOLOGIA - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0712021 - CONSULTA EM OFTALMOLOGIA - ADULTO"
            },
            {
                "codigo": "0714013",
                "descricao": "13 - PAAF TIREOIDE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0714013 - 13 - PAAF TIREOIDE"
            },
            {
                "codigo": "0729006",
                "descricao": "CONSULTA EM CARDIOLOGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0729006 - CONSULTA EM CARDIOLOGIA"
            },
            {
                "codigo": "0740007",
                "descricao": "ATENDIMENTO CLINICO P/ INDICACAO, FORNECIMENTO E INSERCAO DO DISPOSITIVO INTRA-UTERINO (DIU)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0740007 - ATENDIMENTO CLINICO P/ INDICACAO, FORNECIMENTO E INSERCAO DO DISPOSITIVO INTRA-UTERINO (DIU)"
            },
            {
                "codigo": "0755029",
                "descricao": "CONSULTA EM NEUROLOGIA - PPI",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0755029 - CONSULTA EM NEUROLOGIA - PPI"
            },
            {
                "codigo": "0766104",
                "descricao": "HISTEROSCOPIA (DIAGNOSTICA)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0766104 - HISTEROSCOPIA (DIAGNOSTICA)"
            },
            {
                "codigo": "0766106",
                "descricao": "APLICAÇÃO DE TOXINA BOTULINICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0766106 - APLICAÇÃO DE TOXINA BOTULINICA"
            },
            {
                "codigo": "0766292",
                "descricao": "ELETROENCEFALOGRAMA - PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0766292 - ELETROENCEFALOGRAMA - PEDIATRIA"
            },
            {
                "codigo": "0766444",
                "descricao": "REAVALIAÇÃO APÓS APLICAÇÃO DE TOXINA BOTULINICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0766444 - REAVALIAÇÃO APÓS APLICAÇÃO DE TOXINA BOTULINICA"
            },
            {
                "codigo": "0770004",
                "descricao": "FIBROMIALGIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0770004 - FIBROMIALGIA"
            },
            {
                "codigo": "0812003",
                "descricao": "HISTEROSCOPIA DIAGNOSTICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0812003 - HISTEROSCOPIA DIAGNOSTICA"
            },
            {
                "codigo": "0814013",
                "descricao": "INJECAO INTRA-VITREO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0814013 - INJECAO INTRA-VITREO"
            },
            {
                "codigo": "0816011",
                "descricao": "FACOEMULSIFICACAO C/ IMPLANTE DE LENTE INTRA-OCULAR DOBRAVEL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0816011 - FACOEMULSIFICACAO C/ IMPLANTE DE LENTE INTRA-OCULAR DOBRAVEL"
            },
            {
                "codigo": "0818084",
                "descricao": "POTENCIAL DE ACUIDADE VISUAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818084 - POTENCIAL DE ACUIDADE VISUAL"
            },
            {
                "codigo": "0818088",
                "descricao": "GONIOSCOPIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818088 - GONIOSCOPIA"
            },
            {
                "codigo": "0818093",
                "descricao": "PAQUIMETRIA ULTRASSONICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818093 - PAQUIMETRIA ULTRASSONICA"
            },
            {
                "codigo": "0818094",
                "descricao": "BIOMETRIA ULTRASSONICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818094 - BIOMETRIA ULTRASSONICA"
            },
            {
                "codigo": "0818095",
                "descricao": "RETINOGRAFIA (COLORIDA)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818095 - RETINOGRAFIA (COLORIDA)"
            },
            {
                "codigo": "0818096",
                "descricao": "TESTE DE PROVOCACAO DE GLAUCOMA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818096 - TESTE DE PROVOCACAO DE GLAUCOMA"
            },
            {
                "codigo": "0818099",
                "descricao": "TESTE ORTOPTICO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818099 - TESTE ORTOPTICO"
            },
            {
                "codigo": "0818103",
                "descricao": "MAPEAMENTO DE RETINA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818103 - MAPEAMENTO DE RETINA"
            },
            {
                "codigo": "0818104",
                "descricao": "CAMPIMETRIA COMPUTADORIZADA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818104 - CAMPIMETRIA COMPUTADORIZADA"
            },
            {
                "codigo": "0818109",
                "descricao": "POTENCIAL EVOCADO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818109 - POTENCIAL EVOCADO"
            },
            {
                "codigo": "0818110",
                "descricao": "RETINOGRAFIA FLUORESCENTE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818110 - RETINOGRAFIA FLUORESCENTE"
            },
            {
                "codigo": "0818111",
                "descricao": "MICROSCOPIA ESPECULAR DE CORNEA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818111 - MICROSCOPIA ESPECULAR DE CORNEA"
            },
            {
                "codigo": "0818112",
                "descricao": "TOPOGRAFIA COMPUTADORIZADA DE CORNEA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818112 - TOPOGRAFIA COMPUTADORIZADA DE CORNEA"
            },
            {
                "codigo": "0818117",
                "descricao": "CAPSULOTOMIA A YAG LASER",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818117 - CAPSULOTOMIA A YAG LASER"
            },
            {
                "codigo": "0818123",
                "descricao": "FOTOCOAGULACAO A LASER - POR APLICACAO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818123 - FOTOCOAGULACAO A LASER - POR APLICACAO"
            },
            {
                "codigo": "0818147",
                "descricao": "BIOMICROSCOPIA DE FUNDO DE OLHO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818147 - BIOMICROSCOPIA DE FUNDO DE OLHO"
            },
            {
                "codigo": "0818157",
                "descricao": "CAMPIMETRIA COMPUTADORIZADA OU MANUAL COM GRAFICO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818157 - CAMPIMETRIA COMPUTADORIZADA OU MANUAL COM GRAFICO "
            },
            {
                "codigo": "0818160",
                "descricao": "FOTOCOAGULACAO A LASER - OD",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818160 - FOTOCOAGULACAO A LASER - OD"
            },
            {
                "codigo": "0818161",
                "descricao": "FOTOCOAGULACAO A LASER - OE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818161 - FOTOCOAGULACAO A LASER - OE"
            },
            {
                "codigo": "0818211",
                "descricao": "CAPSULOTOMIA A YAG LASER - OD",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818211 - CAPSULOTOMIA A YAG LASER - OD"
            },
            {
                "codigo": "0818212",
                "descricao": "CAPSULOTOMIA A YAG LASER - OE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818212 - CAPSULOTOMIA A YAG LASER - OE"
            },
            {
                "codigo": "0818238",
                "descricao": "PAQUIMETRIA ULTRASSONICA - OLHO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818238 - PAQUIMETRIA ULTRASSONICA - OLHO DIREITO"
            },
            {
                "codigo": "0818239",
                "descricao": "PAQUIMETRIA ULTRASSONICA - OLHO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818239 - PAQUIMETRIA ULTRASSONICA - OLHO ESQUERDO"
            },
            {
                "codigo": "0818240",
                "descricao": "ULTRA-SONOGRAFIA DO GLOBO OCULAR OU DE ORBITA - OLHO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818240 - ULTRA-SONOGRAFIA DO GLOBO OCULAR OU DE ORBITA - OLHO DIREITO"
            },
            {
                "codigo": "0818241",
                "descricao": "ULTRA-SONOGRAFIA DO GLOBO OCULAR OU DE ORBITA - OLHO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818241 - ULTRA-SONOGRAFIA DO GLOBO OCULAR OU DE ORBITA - OLHO ESQUERDO"
            },
            {
                "codigo": "0818242",
                "descricao": "BIOMETRIA ULTRASSONICA - OLHO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818242 - BIOMETRIA ULTRASSONICA - OLHO DIREITO"
            },
            {
                "codigo": "0818243",
                "descricao": "BIOMETRIA ULTRASSONICA - OLHO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818243 - BIOMETRIA ULTRASSONICA - OLHO ESQUERDO"
            },
            {
                "codigo": "0818244",
                "descricao": "CAMPIMETRIA COMPUTADORIZADA OU MANUAL COM GRAFICO - OLHO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818244 - CAMPIMETRIA COMPUTADORIZADA OU MANUAL COM GRAFICO - OLHO DIREITO"
            },
            {
                "codigo": "0818245",
                "descricao": "CAMPIMETRIA COMPUTADORIZADA OU MANUAL COM GRAFICO - OLHO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818245 - CAMPIMETRIA COMPUTADORIZADA OU MANUAL COM GRAFICO - OLHO ESQUERDO"
            },
            {
                "codigo": "0818248",
                "descricao": "MICROSCOPIA ESPECULAR DE CORNEA - OLHO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818248 - MICROSCOPIA ESPECULAR DE CORNEA - OLHO DIREITO"
            },
            {
                "codigo": "0818255",
                "descricao": "CAPSULOTOMIA A YAG LASER - OLHO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818255 - CAPSULOTOMIA A YAG LASER - OLHO ESQUERDO"
            },
            {
                "codigo": "0818312",
                "descricao": "RETINOGRAFIA COLORIDA BINOCULAR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818312 - RETINOGRAFIA COLORIDA BINOCULAR"
            },
            {
                "codigo": "0818313",
                "descricao": "RETINOGRAFIA FLUORESCENTE BINOCULAR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818313 - RETINOGRAFIA FLUORESCENTE BINOCULAR"
            },
            {
                "codigo": "0818330",
                "descricao": "TONOMETRIA ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818330 - TONOMETRIA "
            },
            {
                "codigo": "0818381",
                "descricao": "TOPOGRAFIA COMPUTADORIZADA DE CORNEA - OD",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818381 - TOPOGRAFIA COMPUTADORIZADA DE CORNEA - OD"
            },
            {
                "codigo": "0818382",
                "descricao": "TOPOGRAFIA COMPUTADORIZADA DE CORNEA - OE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818382 - TOPOGRAFIA COMPUTADORIZADA DE CORNEA - OE"
            },
            {
                "codigo": "0818400",
                "descricao": "TOMOGRAFIA DE COERENCIA OPTICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "0818400 - TOMOGRAFIA DE COERENCIA OPTICA"
            },
            {
                "codigo": "1305001",
                "descricao": "MAMOGRAFIA BILATERAL PARA RASTREAMENTO (ROTINA)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1305001 - MAMOGRAFIA BILATERAL PARA RASTREAMENTO (ROTINA)"
            },
            {
                "codigo": "1305004",
                "descricao": "MAMOGRAFIA UNILATERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1305004 - MAMOGRAFIA UNILATERAL"
            },
            {
                "codigo": "1313030",
                "descricao": "CONSULTA EM ENDOCRINOLOGIA - GERAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1313030 - CONSULTA EM ENDOCRINOLOGIA - GERAL"
            },
            {
                "codigo": "1316005",
                "descricao": "ESOFAG0, HIATO, ESTOMAGO E DUODENO (EED) DE CRIANCA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1316005 - ESOFAG0, HIATO, ESTOMAGO E DUODENO (EED) DE CRIANCA"
            },
            {
                "codigo": "1401002",
                "descricao": "ULTRA-SONOGRAFIA  CERVICAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401002 - ULTRA-SONOGRAFIA  CERVICAL"
            },
            {
                "codigo": "1401003",
                "descricao": "ULTRA-SONOGRAFIA AXILA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401003 - ULTRA-SONOGRAFIA AXILA"
            },
            {
                "codigo": "1401005",
                "descricao": "ULTRA-SONOGRAFIA DE ARTICULACAO COXO-FEMURAL DIREITA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401005 - ULTRA-SONOGRAFIA DE ARTICULACAO COXO-FEMURAL DIREITA"
            },
            {
                "codigo": "1401006",
                "descricao": "ULTRA-SONOGRAFIA DE ARTICULACAO COXO-FEMURAL ESQUERDA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401006 - ULTRA-SONOGRAFIA DE ARTICULACAO COXO-FEMURAL ESQUERDA"
            },
            {
                "codigo": "1401010",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEN SUPERIOR (FIGADO, VESICULA, VIAS BILIARES)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401010 - ULTRA-SONOGRAFIA DE ABDOMEN SUPERIOR (FIGADO, VESICULA, VIAS BILIARES)"
            },
            {
                "codigo": "1401012",
                "descricao": "ULTRA-SONOGRAFIA  DE ANTEBRACO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401012 - ULTRA-SONOGRAFIA  DE ANTEBRACO DIREITO"
            },
            {
                "codigo": "1401014",
                "descricao": "ULTRA-SONOGRAFIA  DE COXA DIREITA ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401014 - ULTRA-SONOGRAFIA  DE COXA DIREITA "
            },
            {
                "codigo": "1401017",
                "descricao": "ULTRA-SONOGRAFIA  DE PERNA DIREITA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401017 - ULTRA-SONOGRAFIA  DE PERNA DIREITA"
            },
            {
                "codigo": "1401018",
                "descricao": "ULTRA-SONOGRAFIA  DE PERNA ESQUERDA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401018 - ULTRA-SONOGRAFIA  DE PERNA ESQUERDA"
            },
            {
                "codigo": "1401020",
                "descricao": "ULTRA-SONOGRAFIA  DE GLANDULAS SALIVARES",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401020 - ULTRA-SONOGRAFIA  DE GLANDULAS SALIVARES"
            },
            {
                "codigo": "1401027",
                "descricao": "ULTRA-SONOGRAFIA DE COXA ESQUERDA ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401027 - ULTRA-SONOGRAFIA DE COXA ESQUERDA "
            },
            {
                "codigo": "1401028",
                "descricao": "ULTRA-SONOGRAFIA DE ARTICULACAO BRACO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401028 - ULTRA-SONOGRAFIA DE ARTICULACAO BRACO DIREITO"
            },
            {
                "codigo": "1401030",
                "descricao": "ULTRA-SONOGRAFIA DE REGIAO CERVICAL (PESCOCO)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401030 - ULTRA-SONOGRAFIA DE REGIAO CERVICAL (PESCOCO)"
            },
            {
                "codigo": "1401031",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEM SUPERIOR (FIGADO, VESICULA, VIAS BILIARES) - ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401031 - ULTRA-SONOGRAFIA DE ABDOMEM SUPERIOR (FIGADO, VESICULA, VIAS BILIARES) - ADULTO"
            },
            {
                "codigo": "1401032",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEM SUPERIOR (FIGADO, VESICULA, VIAS BILIARES) -PEDIATRICA ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401032 - ULTRA-SONOGRAFIA DE ABDOMEM SUPERIOR (FIGADO, VESICULA, VIAS BILIARES) -PEDIATRICA "
            },
            {
                "codigo": "1401033",
                "descricao": "ULTRA-SONOGRAFIA DE TESTICULOS - ADULTO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401033 - ULTRA-SONOGRAFIA DE TESTICULOS - ADULTO "
            },
            {
                "codigo": "1401034",
                "descricao": "ULTRA-SONOGRAFIA DE TESTICULOS - PEDIATRICO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401034 - ULTRA-SONOGRAFIA DE TESTICULOS - PEDIATRICO "
            },
            {
                "codigo": "1401037",
                "descricao": "ULTRA-SONOGRAFIA DE PARTES MOLES",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401037 - ULTRA-SONOGRAFIA DE PARTES MOLES"
            },
            {
                "codigo": "1401048",
                "descricao": "ULTRA-SONOGRAFIA DE ARTICULACAO COLUNA LOMBAR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401048 - ULTRA-SONOGRAFIA DE ARTICULACAO COLUNA LOMBAR"
            },
            {
                "codigo": "1401049",
                "descricao": "ULTRA-SONOGRAFIA DE ARTICULACAO COLUNA DORSAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401049 - ULTRA-SONOGRAFIA DE ARTICULACAO COLUNA DORSAL"
            },
            {
                "codigo": "1401051",
                "descricao": "ULTRA-SONOGRAFIA DE GLOBO OCULAR / ORBITA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401051 - ULTRA-SONOGRAFIA DE GLOBO OCULAR / ORBITA"
            },
            {
                "codigo": "1401056",
                "descricao": "ULTRASSONOGRAFIA DE ABDOMEN INFERIOR ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401056 - ULTRASSONOGRAFIA DE ABDOMEN INFERIOR "
            },
            {
                "codigo": "1401057",
                "descricao": "ULTRA-SONOGRAFIA DE REGIAO INGUINAL ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401057 - ULTRA-SONOGRAFIA DE REGIAO INGUINAL ESQUERDO"
            },
            {
                "codigo": "1401058",
                "descricao": "ULTRA-SONOGRAFIA DE REGIAO INGUINAL DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401058 - ULTRA-SONOGRAFIA DE REGIAO INGUINAL DIREITO"
            },
            {
                "codigo": "1401074",
                "descricao": "ULTRASSONOGRAFIA DE QUADRIL ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401074 - ULTRASSONOGRAFIA DE QUADRIL ESQUERDO"
            },
            {
                "codigo": "1401075",
                "descricao": "ULTRASSONOGRAFIA DE QUADRIL DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401075 - ULTRASSONOGRAFIA DE QUADRIL DIREITO"
            },
            {
                "codigo": "1401101",
                "descricao": "ULTRA-SONOGRAFIA PELVICA (GINECOLOGICA)                   ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401101 - ULTRA-SONOGRAFIA PELVICA (GINECOLOGICA)                   "
            },
            {
                "codigo": "1401201",
                "descricao": "ULTRA-SONOGRAFIA OBSTETRICA                                 ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401201 - ULTRA-SONOGRAFIA OBSTETRICA                                 "
            },
            {
                "codigo": "1401202",
                "descricao": "ULTRA-SONOGRAFIA TRANSVAGINAL                               ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401202 - ULTRA-SONOGRAFIA TRANSVAGINAL                               "
            },
            {
                "codigo": "1401203",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEN TOTAL ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401203 - ULTRA-SONOGRAFIA DE ABDOMEN TOTAL ADULTO"
            },
            {
                "codigo": "1401204",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEN TOTAL INFANTIL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401204 - ULTRA-SONOGRAFIA DE ABDOMEN TOTAL INFANTIL"
            },
            {
                "codigo": "1401206",
                "descricao": "ULTRA-SONOGRAFIA DE BRACO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401206 - ULTRA-SONOGRAFIA DE BRACO DIREITO"
            },
            {
                "codigo": "1401207",
                "descricao": "ULTRA-SONOGRAFIA DE BRACO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401207 - ULTRA-SONOGRAFIA DE BRACO ESQUERDO"
            },
            {
                "codigo": "1401405",
                "descricao": "ULTRA-SONOGRAFIA  DO APARELHO URINARIO (RINS, BEXIGA)    ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401405 - ULTRA-SONOGRAFIA  DO APARELHO URINARIO (RINS, BEXIGA)    "
            },
            {
                "codigo": "1401406",
                "descricao": "ULTRA-SONOGRAFIA  DO APARELHO URINARIO ADULTO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401406 - ULTRA-SONOGRAFIA  DO APARELHO URINARIO ADULTO"
            },
            {
                "codigo": "1401407",
                "descricao": "ULTRA-SONOGRAFIA  DO APARELHO URINARIO INFANTIL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401407 - ULTRA-SONOGRAFIA  DO APARELHO URINARIO INFANTIL"
            },
            {
                "codigo": "1401409",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO OMBRO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401409 - ULTRA-SONOGRAFIA  DE ARTICULACAO OMBRO DIREITO"
            },
            {
                "codigo": "1401500",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO OMBRO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401500 - ULTRA-SONOGRAFIA  DE ARTICULACAO OMBRO ESQUERDO"
            },
            {
                "codigo": "1401505",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO COTOVELO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401505 - ULTRA-SONOGRAFIA  DE ARTICULACAO COTOVELO DIREITO"
            },
            {
                "codigo": "1401506",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO COTOVELO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401506 - ULTRA-SONOGRAFIA  DE ARTICULACAO COTOVELO ESQUERDO"
            },
            {
                "codigo": "1401508",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO ANTEBRACO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401508 - ULTRA-SONOGRAFIA  DE ARTICULACAO ANTEBRACO ESQUERDO"
            },
            {
                "codigo": "1401509",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO PUNHO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401509 - ULTRA-SONOGRAFIA  DE ARTICULACAO PUNHO DIREITO"
            },
            {
                "codigo": "1401510",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO PUNHO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401510 - ULTRA-SONOGRAFIA  DE ARTICULACAO PUNHO ESQUERDO"
            },
            {
                "codigo": "1401511",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO MAO DIREITA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401511 - ULTRA-SONOGRAFIA  DE ARTICULACAO MAO DIREITA"
            },
            {
                "codigo": "1401512",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO MAO ESQUERDA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401512 - ULTRA-SONOGRAFIA  DE ARTICULACAO MAO ESQUERDA"
            },
            {
                "codigo": "1401513",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO DEDOS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401513 - ULTRA-SONOGRAFIA  DE ARTICULACAO DEDOS"
            },
            {
                "codigo": "1401514",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO COXA DIREITA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401514 - ULTRA-SONOGRAFIA  DE ARTICULACAO COXA DIREITA"
            },
            {
                "codigo": "1401515",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO COXA ESQUERDA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401515 - ULTRA-SONOGRAFIA  DE ARTICULACAO COXA ESQUERDA"
            },
            {
                "codigo": "1401516",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO JOELHO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401516 - ULTRA-SONOGRAFIA  DE ARTICULACAO JOELHO DIREITO"
            },
            {
                "codigo": "1401517",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO JOELHO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401517 - ULTRA-SONOGRAFIA  DE ARTICULACAO JOELHO ESQUERDO"
            },
            {
                "codigo": "1401519",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO PANTURRILHA ESQUERDA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401519 - ULTRA-SONOGRAFIA  DE ARTICULACAO PANTURRILHA ESQUERDA"
            },
            {
                "codigo": "1401520",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO TORNOZELO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401520 - ULTRA-SONOGRAFIA  DE ARTICULACAO TORNOZELO DIREITO"
            },
            {
                "codigo": "1401521",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO TORNOZELO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401521 - ULTRA-SONOGRAFIA  DE ARTICULACAO TORNOZELO ESQUERDO"
            },
            {
                "codigo": "1401522",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO PE DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401522 - ULTRA-SONOGRAFIA  DE ARTICULACAO PE DIREITO"
            },
            {
                "codigo": "1401523",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO PE ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401523 - ULTRA-SONOGRAFIA  DE ARTICULACAO PE ESQUERDO"
            },
            {
                "codigo": "1401524",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO DEDOS DO PE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401524 - ULTRA-SONOGRAFIA  DE ARTICULACAO DEDOS DO PE"
            },
            {
                "codigo": "1401525",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO CERVICAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401525 - ULTRA-SONOGRAFIA  DE ARTICULACAO CERVICAL"
            },
            {
                "codigo": "1401526",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO QUADRIL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401526 - ULTRA-SONOGRAFIA  DE ARTICULACAO QUADRIL"
            },
            {
                "codigo": "1401527",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO CLAVICULA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401527 - ULTRA-SONOGRAFIA  DE ARTICULACAO CLAVICULA"
            },
            {
                "codigo": "1401528",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO PERNA DIREITA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401528 - ULTRA-SONOGRAFIA  DE ARTICULACAO PERNA DIREITA"
            },
            {
                "codigo": "1401529",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO PERNA ESQUERDA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401529 - ULTRA-SONOGRAFIA  DE ARTICULACAO PERNA ESQUERDA"
            },
            {
                "codigo": "1401530",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO TENDAO DE AQUILES",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401530 - ULTRA-SONOGRAFIA  DE ARTICULACAO TENDAO DE AQUILES"
            },
            {
                "codigo": "1401532",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401532 - ULTRA-SONOGRAFIA  DE ARTICULACAO ESQUERDO"
            },
            {
                "codigo": "1401921",
                "descricao": "ULTRA-SONOGRAFIA  DE ARTICULACAO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401921 - ULTRA-SONOGRAFIA  DE ARTICULACAO"
            },
            {
                "codigo": "1401929",
                "descricao": "ULTRA-SONOGRAFIA  PROSTATA ( VIA TRANSRETAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401929 - ULTRA-SONOGRAFIA  PROSTATA ( VIA TRANSRETAL)"
            },
            {
                "codigo": "1401930",
                "descricao": "ULTRA-SONOGRAFIA  TORAX ( EXTRACARDIACO )",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401930 - ULTRA-SONOGRAFIA  TORAX ( EXTRACARDIACO )"
            },
            {
                "codigo": "1401937",
                "descricao": "ECOGRAFIA DE ABDOMEN SUPERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401937 - ECOGRAFIA DE ABDOMEN SUPERIOR"
            },
            {
                "codigo": "1401939",
                "descricao": "ULTRA-SONOGRAFIA PELVICA (ABDOMEM INFERIOR)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401939 - ULTRA-SONOGRAFIA PELVICA (ABDOMEM INFERIOR)"
            },
            {
                "codigo": "1401940",
                "descricao": "ECOGRAFIA DE PARTES MOLES",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401940 - ECOGRAFIA DE PARTES MOLES"
            },
            {
                "codigo": "1401942",
                "descricao": "ULTRA-SONOGRAFIA TRANSFONTANELAR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401942 - ULTRA-SONOGRAFIA TRANSFONTANELAR"
            },
            {
                "codigo": "1401943",
                "descricao": "ULTRA-SONOGRAFIA DE REGIAO INGUINAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401943 - ULTRA-SONOGRAFIA DE REGIAO INGUINAL"
            },
            {
                "codigo": "1401946",
                "descricao": "ULTRA-SONOGRAFIA PENIANA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401946 - ULTRA-SONOGRAFIA PENIANA"
            },
            {
                "codigo": "1401948",
                "descricao": "ULTRA-SONOGRAFIA DE PARTES MOLES (LIPOMA)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401948 - ULTRA-SONOGRAFIA DE PARTES MOLES (LIPOMA)"
            },
            {
                "codigo": "1401974",
                "descricao": "ULTRA-SONOGRAFIA DE ARTERIAS CAROTIDAS E VERTEBRAIS COM DOPPLER",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401974 - ULTRA-SONOGRAFIA DE ARTERIAS CAROTIDAS E VERTEBRAIS COM DOPPLER"
            },
            {
                "codigo": "1401977",
                "descricao": "ULTRA-SONOGRAFIA DE MAMAS (BILATERAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401977 - ULTRA-SONOGRAFIA DE MAMAS (BILATERAL)"
            },
            {
                "codigo": "1401978",
                "descricao": "ULTRA-SONOGRAFIA DE BOLSA ESCROTAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401978 - ULTRA-SONOGRAFIA DE BOLSA ESCROTAL"
            },
            {
                "codigo": "1401979",
                "descricao": "ULTRA-SONOGRAFIA DE PAREDE ABDOMINAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401979 - ULTRA-SONOGRAFIA DE PAREDE ABDOMINAL"
            },
            {
                "codigo": "1401980",
                "descricao": "ULTRA-SONOGRAFIA DE TIREOIDE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401980 - ULTRA-SONOGRAFIA DE TIREOIDE"
            },
            {
                "codigo": "1401981",
                "descricao": "ULTRA-SONOGRAFIA DE PROSTATA (VIA TRANSRETAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401981 - ULTRA-SONOGRAFIA DE PROSTATA (VIA TRANSRETAL)"
            },
            {
                "codigo": "1401985",
                "descricao": "ULTRA-SONOGRAFIA DE GLANDULAS SALIVARES",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401985 - ULTRA-SONOGRAFIA DE GLANDULAS SALIVARES"
            },
            {
                "codigo": "1401986",
                "descricao": "ULTRA-SONOGRAFIA OBSTETRICA - TRANSVAGINAL (ATE 12 SEMANAS)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401986 - ULTRA-SONOGRAFIA OBSTETRICA - TRANSVAGINAL (ATE 12 SEMANAS)"
            },
            {
                "codigo": "1401987",
                "descricao": "ULTRA-SONOGRAFIA DE REGIAO CERVICAL (PESCOCO)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401987 - ULTRA-SONOGRAFIA DE REGIAO CERVICAL (PESCOCO)"
            },
            {
                "codigo": "1401988",
                "descricao": "ULTRA-SONOGRAFIA PELVICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401988 - ULTRA-SONOGRAFIA PELVICA"
            },
            {
                "codigo": "1401989",
                "descricao": "ULTRA-SONOGRAFIA  DE VIAS URINARIAS (ACIMA DE 13 ANOS)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401989 - ULTRA-SONOGRAFIA  DE VIAS URINARIAS (ACIMA DE 13 ANOS)"
            },
            {
                "codigo": "1401991",
                "descricao": "ULTRA-SONOGRAFIA DE MEMBRO INFERIOR DIREITO (MID)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401991 - ULTRA-SONOGRAFIA DE MEMBRO INFERIOR DIREITO (MID)"
            },
            {
                "codigo": "1401992",
                "descricao": "ULTRA-SONOGRAFIA DE MEMBRO INFERIOR ESQUERDO (MIE)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401992 - ULTRA-SONOGRAFIA DE MEMBRO INFERIOR ESQUERDO (MIE)"
            },
            {
                "codigo": "1401993",
                "descricao": "ULTRA-SONOGRAFIA DE MEMBROS INFERIORES (MMII)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401993 - ULTRA-SONOGRAFIA DE MEMBROS INFERIORES (MMII)"
            },
            {
                "codigo": "1401997",
                "descricao": "ULTRA-SONOGRAFIA DE PROSTATA (VIA ABDOMINAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401997 - ULTRA-SONOGRAFIA DE PROSTATA (VIA ABDOMINAL)"
            },
            {
                "codigo": "1401998",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEN TOTAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401998 - ULTRA-SONOGRAFIA DE ABDOMEN TOTAL"
            },
            {
                "codigo": "1401999",
                "descricao": "ULTRA-SONOGRAFIA DE ABDOMEN SUPERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1401999 - ULTRA-SONOGRAFIA DE ABDOMEN SUPERIOR"
            },
            {
                "codigo": "1407008",
                "descricao": "ULTRA-SONOGRAFIA DE GLOBO OCULAR OU DE ORBITA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1407008 - ULTRA-SONOGRAFIA DE GLOBO OCULAR OU DE ORBITA"
            },
            {
                "codigo": "1407014",
                "descricao": "ECOCARDIOGRAFIA BI-DIMENSIONAL COM OU SEM DOPPLER",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1407014 - ECOCARDIOGRAFIA BI-DIMENSIONAL COM OU SEM DOPPLER"
            },
            {
                "codigo": "1407023",
                "descricao": "ECOCARDIOGRAFIA DE ESTRESSE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1407023 - ECOCARDIOGRAFIA DE ESTRESSE"
            },
            {
                "codigo": "1407024",
                "descricao": "ECOCARDIOGRAFIA TRANSESOFAGICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1407024 - ECOCARDIOGRAFIA TRANSESOFAGICA"
            },
            {
                "codigo": "1407044",
                "descricao": "TESTE DE ESFORCO OU TESTE ERGOMETRICO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1407044 - TESTE DE ESFORCO OU TESTE ERGOMETRICO"
            },
            {
                "codigo": "1670001",
                "descricao": "ULTRA-SONOGRAFIA DOPPLER DE FLUXO OBSTETRICO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670001 - ULTRA-SONOGRAFIA DOPPLER DE FLUXO OBSTETRICO"
            },
            {
                "codigo": "1670003",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER COLORIDO DE TRES VASOS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670003 - ULTRA-SONOGRAFIA  DOPPLER COLORIDO DE TRES VASOS"
            },
            {
                "codigo": "1670006",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER DE CAROTIDAS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670006 - ULTRA-SONOGRAFIA  DOPPLER DE CAROTIDAS"
            },
            {
                "codigo": "1670007",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER VENOSO - MID",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670007 - ULTRA-SONOGRAFIA  DOPPLER VENOSO - MID"
            },
            {
                "codigo": "1670008",
                "descricao": "ULTRA-SONOGRAFIA DOPPLER DE ARTERIAS RENAIS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670008 - ULTRA-SONOGRAFIA DOPPLER DE ARTERIAS RENAIS"
            },
            {
                "codigo": "1670009",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER VENOSO - MIE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670009 - ULTRA-SONOGRAFIA  DOPPLER VENOSO - MIE"
            },
            {
                "codigo": "1670010",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER VENOSO - MSD",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670010 - ULTRA-SONOGRAFIA  DOPPLER VENOSO - MSD"
            },
            {
                "codigo": "1670011",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER VENOSO - MSE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670011 - ULTRA-SONOGRAFIA  DOPPLER VENOSO - MSE"
            },
            {
                "codigo": "1670012",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M I D",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670012 - ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M I D"
            },
            {
                "codigo": "1670013",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M I E",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670013 - ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M I E"
            },
            {
                "codigo": "1670014",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M S D",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670014 - ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M S D"
            },
            {
                "codigo": "1670015",
                "descricao": "ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M S E",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670015 - ULTRA-SONOGRAFIA  DOPPLER ARTERIAL- M S E"
            },
            {
                "codigo": "1670016",
                "descricao": "ULTRA-SONOGRAFIA DOPPLER DE AORTA E VASOS ILIACOS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670016 - ULTRA-SONOGRAFIA DOPPLER DE AORTA E VASOS ILIACOS"
            },
            {
                "codigo": "1670019",
                "descricao": "DOPPLER DE BOLSA ESCROTAL ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670019 - DOPPLER DE BOLSA ESCROTAL "
            },
            {
                "codigo": "1670022",
                "descricao": "ULTRA-SONOGRAFIA DOPPLER DE TIREOIDE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670022 - ULTRA-SONOGRAFIA DOPPLER DE TIREOIDE"
            },
            {
                "codigo": "1670027",
                "descricao": "ULTRA-SONOGRAFIA DOPPLER DE CAROTIDAS E VERTEBRAIS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670027 - ULTRA-SONOGRAFIA DOPPLER DE CAROTIDAS E VERTEBRAIS"
            },
            {
                "codigo": "1670033",
                "descricao": "ULTRA-SONOGRAFIA OBSTETRICA C/ DOPPLER COLORIDO E PULSADO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670033 - ULTRA-SONOGRAFIA OBSTETRICA C/ DOPPLER COLORIDO E PULSADO"
            },
            {
                "codigo": "1670038",
                "descricao": "ULTRA-SONOGRAFIA DOPPLER DE BOLSA ESCROTAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670038 - ULTRA-SONOGRAFIA DOPPLER DE BOLSA ESCROTAL"
            },
            {
                "codigo": "1670043",
                "descricao": "ULTRA-SONOGRAFIA DOPPLER VENOSO SUPERFICIAL - MID",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670043 - ULTRA-SONOGRAFIA DOPPLER VENOSO SUPERFICIAL - MID"
            },
            {
                "codigo": "1670044",
                "descricao": "ULTRA-SONOGRAFIA DOPPLER VENOSO SUPERFICIAL - MIE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670044 - ULTRA-SONOGRAFIA DOPPLER VENOSO SUPERFICIAL - MIE"
            },
            {
                "codigo": "1670050",
                "descricao": "ULTRA-SONOGRAFIA DOPPLER VENOSO PROFUNDO - MSE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670050 - ULTRA-SONOGRAFIA DOPPLER VENOSO PROFUNDO - MSE"
            },
            {
                "codigo": "1670055",
                "descricao": "ULTRA-SONOGRAFIA DOPPLER - CERVICAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1670055 - ULTRA-SONOGRAFIA DOPPLER - CERVICAL"
            },
            {
                "codigo": "1680001",
                "descricao": "ULTRA-SONOGRAFIA OBSTETRICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1680001 - ULTRA-SONOGRAFIA OBSTETRICA"
            },
            {
                "codigo": "1680003",
                "descricao": "ULTRA-SONOGRAFIA TRANSVAGINAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1680003 - ULTRA-SONOGRAFIA TRANSVAGINAL"
            },
            {
                "codigo": "1702068",
                "descricao": "TOMOGRAFIA DE COERENCIA OPTICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1702068 - TOMOGRAFIA DE COERENCIA OPTICA"
            },
            {
                "codigo": "1703020",
                "descricao": "BRONCOSCOPIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1703020 - BRONCOSCOPIA"
            },
            {
                "codigo": "1703025",
                "descricao": "AVALIACAO P/ DIAGNOSTICO DE DEFICIENCIA AUDITIVA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1703025 - AVALIACAO P/ DIAGNOSTICO DE DEFICIENCIA AUDITIVA"
            },
            {
                "codigo": "1703101",
                "descricao": "ELETROCARDIOGRAMA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1703101 - ELETROCARDIOGRAMA"
            },
            {
                "codigo": "1703203",
                "descricao": "MONITORIZACAO AMBULATORIAL DE PRESSAO ARTERIAL              ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1703203 - MONITORIZACAO AMBULATORIAL DE PRESSAO ARTERIAL              "
            },
            {
                "codigo": "1703204",
                "descricao": "HOLTER 24 HORAS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1703204 - HOLTER 24 HORAS"
            },
            {
                "codigo": "1703222",
                "descricao": "PAQUIMETRIA ULTRASSONICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1703222 - PAQUIMETRIA ULTRASSONICA"
            },
            {
                "codigo": "1703238",
                "descricao": "ELETROCARDIOGRAMA PEDIATRICO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1703238 - ELETROCARDIOGRAMA PEDIATRICO"
            },
            {
                "codigo": "1704002",
                "descricao": "ESTUDO URODINAMICO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1704002 - ESTUDO URODINAMICO"
            },
            {
                "codigo": "1707164",
                "descricao": "TRATAMENTO MEDICAMENTOSO DA DOENÇA DA RETINA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1707164 - TRATAMENTO MEDICAMENTOSO DA DOENÇA DA RETINA"
            },
            {
                "codigo": "1711101",
                "descricao": "COLONOSCOPIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1711101 - COLONOSCOPIA"
            },
            {
                "codigo": "1711547",
                "descricao": "ENDOSCOPIA DIGESTIVA ALTA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1711547 - ENDOSCOPIA DIGESTIVA ALTA"
            },
            {
                "codigo": "1712011",
                "descricao": "ESPIROMETRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1712011 - ESPIROMETRIA"
            },
            {
                "codigo": "1723035",
                "descricao": "BIOPSIA DE PROSTATA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1723035 - BIOPSIA DE PROSTATA"
            },
            {
                "codigo": "1723057",
                "descricao": "13 - PAAF TIREOIDE ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1723057 - 13 - PAAF TIREOIDE "
            },
            {
                "codigo": "1804014",
                "descricao": "CONSULTA EM ATENDIMENTO EM FISIOTERAPIA UROGINECOLOGICA ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1804014 - CONSULTA EM ATENDIMENTO EM FISIOTERAPIA UROGINECOLOGICA "
            },
            {
                "codigo": "1902004",
                "descricao": "LITOTRIPSIA EXTRACORPOREA (ONDA DE CHOQUE PARCIAL / COMPLETA EM 1 REGIAO RENAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1902004 - LITOTRIPSIA EXTRACORPOREA (ONDA DE CHOQUE PARCIAL / COMPLETA EM 1 REGIAO RENAL)"
            },
            {
                "codigo": "1902017",
                "descricao": "LITOTRIPSIA EXTRACORPOREA (ONDA DE CHOQUE PARCIAL / COMPLETA EM 1 REGIAO RENAL) 4 APLICACOES",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "1902017 - LITOTRIPSIA EXTRACORPOREA (ONDA DE CHOQUE PARCIAL / COMPLETA EM 1 REGIAO RENAL) 4 APLICACOES"
            },
            {
                "codigo": "2018020",
                "descricao": "TESTE DA LINGUINHA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2018020 - TESTE DA LINGUINHA"
            },
            {
                "codigo": "2018712",
                "descricao": "CONSULTA EM NEFROLOGIA GERAL - DOENCA RENAL CRONICA  ADULTO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2018712 - CONSULTA EM NEFROLOGIA GERAL - DOENCA RENAL CRONICA  ADULTO "
            },
            {
                "codigo": "2200002",
                "descricao": "CINTILOGRAFIA DE MIOCARDIO P/ AVALIACAO DA PERFUSAO EM SITUACAO DE ESTRESSE (MINIMO 3 PROJECOES)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200002 - CINTILOGRAFIA DE MIOCARDIO P/ AVALIACAO DA PERFUSAO EM SITUACAO DE ESTRESSE (MINIMO 3 PROJECOES)"
            },
            {
                "codigo": "2200003",
                "descricao": "CINTILOGRAFIA DE MIOCARDIO P/ AVALIACAO DA PERFUSAO EM SITUACAO DE REPOUSO (MINIMO 3 PROJECOES)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200003 - CINTILOGRAFIA DE MIOCARDIO P/ AVALIACAO DA PERFUSAO EM SITUACAO DE REPOUSO (MINIMO 3 PROJECOES)"
            },
            {
                "codigo": "2200004",
                "descricao": "CINTILOGRAFIA DO MIOCARDIO  / NECROSE (MINIMO 3 PROJECOES )",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200004 - CINTILOGRAFIA DO MIOCARDIO  / NECROSE (MINIMO 3 PROJECOES )"
            },
            {
                "codigo": "2200007",
                "descricao": "CINTILOGRAFIA SINCRONIZADA DE CAMARAS CARDIACAS EM SITUACAO DE ESFORCO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200007 - CINTILOGRAFIA SINCRONIZADA DE CAMARAS CARDIACAS EM SITUACAO DE ESFORCO"
            },
            {
                "codigo": "2200008",
                "descricao": "CINTILOGRAFIA SINCRONIZADA DE CAMARAS CARDIACAS EM SITUACAO DE REPOUSO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200008 - CINTILOGRAFIA SINCRONIZADA DE CAMARAS CARDIACAS EM SITUACAO DE REPOUSO"
            },
            {
                "codigo": "2200022",
                "descricao": "CINTILOGRAFIA DE PARATIREOIDE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200022 - CINTILOGRAFIA DE PARATIREOIDE"
            },
            {
                "codigo": "2200023",
                "descricao": "CINTILOGRAFIA DA TIREOIDE COM OU SEM CAPTACAO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200023 - CINTILOGRAFIA DA TIREOIDE COM OU SEM CAPTACAO"
            },
            {
                "codigo": "2200025",
                "descricao": "CINTILOGRAFIA P/ PESQUISA DO CORPO INTEIRO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200025 - CINTILOGRAFIA P/ PESQUISA DO CORPO INTEIRO"
            },
            {
                "codigo": "2200029",
                "descricao": "CINTILOGRAFIA RENAL (QUALITATIVA E/OU QUANTITATIVA)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200029 - CINTILOGRAFIA RENAL (QUALITATIVA E/OU QUANTITATIVA)"
            },
            {
                "codigo": "2200031",
                "descricao": "CISTOCINTILOGRAFIA INDIRETA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200031 - CISTOCINTILOGRAFIA INDIRETA"
            },
            {
                "codigo": "2200035",
                "descricao": "CINTILOGRAFIA DE ARTICULACOES E/OU EXTREMIDADES E/OU OSSO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200035 - CINTILOGRAFIA DE ARTICULACOES E/OU EXTREMIDADES E/OU OSSO"
            },
            {
                "codigo": "2200036",
                "descricao": "CINTILOGRAFIA DE OSSOS C/ OU S/ FLUXO SANGUINEO (CORPO INTEIRO)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200036 - CINTILOGRAFIA DE OSSOS C/ OU S/ FLUXO SANGUINEO (CORPO INTEIRO)"
            },
            {
                "codigo": "2200037",
                "descricao": "CINTILOGRAFIA DE SEGMENTO OSSEO COM GALIO 67",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200037 - CINTILOGRAFIA DE SEGMENTO OSSEO COM GALIO 67"
            },
            {
                "codigo": "2200038",
                "descricao": "CINTILOGRAFIA DE PERFUSAO CEREBRAL C/ TALIO (SPCTO)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200038 - CINTILOGRAFIA DE PERFUSAO CEREBRAL C/ TALIO (SPCTO)"
            },
            {
                "codigo": "2200056",
                "descricao": "TRATAMENTO DE HIPERTIREOIDISMO (PLUMMER - ATE 30 MCI)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200056 - TRATAMENTO DE HIPERTIREOIDISMO (PLUMMER - ATE 30 MCI)"
            },
            {
                "codigo": "2200057",
                "descricao": "CINTILOGRAFIA RENAL ESTATICA (DMSA)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200057 - CINTILOGRAFIA RENAL ESTATICA (DMSA)"
            },
            {
                "codigo": "2200061",
                "descricao": "CINTILOGRAFIA RENAL DINAMICA (DTPA)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200061 - CINTILOGRAFIA RENAL DINAMICA (DTPA)"
            },
            {
                "codigo": "2200063",
                "descricao": "CINTILOGRAFIA OSSEA C/ OU S/ FLUXO SANGUINEO ( CORPO INTEIRO)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200063 - CINTILOGRAFIA OSSEA C/ OU S/ FLUXO SANGUINEO ( CORPO INTEIRO)"
            },
            {
                "codigo": "2200066",
                "descricao": "IODOTERAPIA DE CARCINOMA DIFERENCIADO DE TIREOIDE (50MCL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200066 - IODOTERAPIA DE CARCINOMA DIFERENCIADO DE TIREOIDE (50MCL)"
            },
            {
                "codigo": "2200067",
                "descricao": "IODOTERAPIA DE CARCINOMA DIFERENCIADO DE TIREOIDE (30MCL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "2200067 - IODOTERAPIA DE CARCINOMA DIFERENCIADO DE TIREOIDE (30MCL)"
            },
            {
                "codigo": "3001006",
                "descricao": "ACOLHIMENTO PARA CENTRO ESPECIALIZADO EM REABILITACAO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3001006 - ACOLHIMENTO PARA CENTRO ESPECIALIZADO EM REABILITACAO"
            },
            {
                "codigo": "3100004",
                "descricao": "RESSONANCIA MAGNETICA DE COLUNA CERVICAL                    ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100004 - RESSONANCIA MAGNETICA DE COLUNA CERVICAL                    "
            },
            {
                "codigo": "3100005",
                "descricao": "RESSONANCIA MAGNETICA DE COLUNA LOMBO-SACRA                 ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100005 - RESSONANCIA MAGNETICA DE COLUNA LOMBO-SACRA                 "
            },
            {
                "codigo": "3100006",
                "descricao": "RESSONANCIA MAGNETICA DE COLUNA TORACICA                    ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100006 - RESSONANCIA MAGNETICA DE COLUNA TORACICA                    "
            },
            {
                "codigo": "3100010",
                "descricao": "RESSONANCIA MAGNETICA DE CRANIO                             ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100010 - RESSONANCIA MAGNETICA DE CRANIO                             "
            },
            {
                "codigo": "3100014",
                "descricao": "RESSONANCIA MAGNETICA DE ABDOMEN SUPERIOR                   ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100014 - RESSONANCIA MAGNETICA DE ABDOMEN SUPERIOR                   "
            },
            {
                "codigo": "3100015",
                "descricao": "RESSONANCIA MAGNETICA DE JOELHO (UNILATERAL)              ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100015 - RESSONANCIA MAGNETICA DE JOELHO (UNILATERAL)              "
            },
            {
                "codigo": "3100017",
                "descricao": "RESSONANCIA MAGNETICA DE TORAX                              ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100017 - RESSONANCIA MAGNETICA DE TORAX                              "
            },
            {
                "codigo": "3100020",
                "descricao": "RESSONANCIA MAGNETICA DE ABDOMEN TOTAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100020 - RESSONANCIA MAGNETICA DE ABDOMEN TOTAL"
            },
            {
                "codigo": "3100021",
                "descricao": "ANGIORESSONANCIA CEREBRAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100021 - ANGIORESSONANCIA CEREBRAL"
            },
            {
                "codigo": "3100026",
                "descricao": "RESSONANCIA MAGNETICA DE OMBRO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100026 - RESSONANCIA MAGNETICA DE OMBRO ESQUERDO"
            },
            {
                "codigo": "3100027",
                "descricao": "RESSONANCIA MAGNETICA DE OMBRO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100027 - RESSONANCIA MAGNETICA DE OMBRO DIREITO"
            },
            {
                "codigo": "3100030",
                "descricao": "RESSONANCIA MAGNETICA DO JOELHO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100030 - RESSONANCIA MAGNETICA DO JOELHO ESQUERDO"
            },
            {
                "codigo": "3100031",
                "descricao": "RESSONANCIA MAGNETICA DO JOELHO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100031 - RESSONANCIA MAGNETICA DO JOELHO DIREITO"
            },
            {
                "codigo": "3100034",
                "descricao": "RESSONANCIA MAGNETICA DE CRANIO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100034 - RESSONANCIA MAGNETICA DE CRANIO"
            },
            {
                "codigo": "3100040",
                "descricao": "RESSONANCIA MAGNETICA DE BASE DO CRANIO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100040 - RESSONANCIA MAGNETICA DE BASE DO CRANIO"
            },
            {
                "codigo": "3100042",
                "descricao": "RESSONANCIA MAGNETICA DE BRACO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100042 - RESSONANCIA MAGNETICA DE BRACO ESQUERDO"
            },
            {
                "codigo": "3100059",
                "descricao": "RESSONANCIA MAGNETICA DE MAO DIREITA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100059 - RESSONANCIA MAGNETICA DE MAO DIREITA"
            },
            {
                "codigo": "3100064",
                "descricao": "RESSONANCIA MAGNETICA DE ORBITAS",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100064 - RESSONANCIA MAGNETICA DE ORBITAS"
            },
            {
                "codigo": "3100073",
                "descricao": "RESSONANCIA MAGNETICA DE QUADRIL ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100073 - RESSONANCIA MAGNETICA DE QUADRIL ESQUERDO"
            },
            {
                "codigo": "3100089",
                "descricao": "RESSONANCIA MAGNETICA DE MEMBRO INFERIOR - DIREITO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100089 - RESSONANCIA MAGNETICA DE MEMBRO INFERIOR - DIREITO "
            },
            {
                "codigo": "3100090",
                "descricao": "RESSONANCIA MAGNETICA DE MEMBRO INFERIOR - ESQUERDO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100090 - RESSONANCIA MAGNETICA DE MEMBRO INFERIOR - ESQUERDO "
            },
            {
                "codigo": "3100091",
                "descricao": "RESSONANCIA MAGNETICA DE MEMBRO SUPERIOR - DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100091 - RESSONANCIA MAGNETICA DE MEMBRO SUPERIOR - DIREITO"
            },
            {
                "codigo": "3100092",
                "descricao": "RESSONANCIA MAGNETICA DE MEMBRO SUPERIOR - ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100092 - RESSONANCIA MAGNETICA DE MEMBRO SUPERIOR - ESQUERDO"
            },
            {
                "codigo": "3100112",
                "descricao": "RESSONANCIA MAGNETICA DE TORNOZELO ESQUERDO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100112 - RESSONANCIA MAGNETICA DE TORNOZELO ESQUERDO "
            },
            {
                "codigo": "3100199",
                "descricao": "RESSONANCIA MAGNETICA DE COLUNA CERVICAL/PESCOCO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100199 - RESSONANCIA MAGNETICA DE COLUNA CERVICAL/PESCOCO"
            },
            {
                "codigo": "3100230",
                "descricao": "RESSONANCIA MAGNETICA DE COLUNA LOMBAR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100230 - RESSONANCIA MAGNETICA DE COLUNA LOMBAR"
            },
            {
                "codigo": "3100237",
                "descricao": "RESSONANCIA MAGNETICA DE COLUNA LOMBO-SACRA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100237 - RESSONANCIA MAGNETICA DE COLUNA LOMBO-SACRA"
            },
            {
                "codigo": "3100245",
                "descricao": "ANGIORESSONANCIA CEREBRAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100245 - ANGIORESSONANCIA CEREBRAL"
            },
            {
                "codigo": "3100253",
                "descricao": "RESSONANCIA MAGNETICA DE VIAS BILIARES/COLANGIORRESSONANCIA                                         ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100253 - RESSONANCIA MAGNETICA DE VIAS BILIARES/COLANGIORRESSONANCIA                                         "
            },
            {
                "codigo": "3100533",
                "descricao": "RESSONANCIA MAGNETICA DE SELA TURCICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100533 - RESSONANCIA MAGNETICA DE SELA TURCICA"
            },
            {
                "codigo": "3100908",
                "descricao": "RESSONANCIA MAGNETICA DE MEMBRO SUPERIOR (UNILATERAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100908 - RESSONANCIA MAGNETICA DE MEMBRO SUPERIOR (UNILATERAL)"
            },
            {
                "codigo": "3100909",
                "descricao": "RESSONANCIA MAGNETICA DE MEMBRO INFERIOR (UNILATERAL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100909 - RESSONANCIA MAGNETICA DE MEMBRO INFERIOR (UNILATERAL)"
            },
            {
                "codigo": "3100953",
                "descricao": "RESSONANCIA MAGNETICA DE BACIA / PELVE / ABDOMEN INFERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3100953 - RESSONANCIA MAGNETICA DE BACIA / PELVE / ABDOMEN INFERIOR"
            },
            {
                "codigo": "3200083",
                "descricao": "IODOTERAPIA DE CARCINOMA DIFERENCIADO DE TIREOIDE (30MCL)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3200083 - IODOTERAPIA DE CARCINOMA DIFERENCIADO DE TIREOIDE (30MCL)"
            },
            {
                "codigo": "3201001",
                "descricao": "APAC - DENSITOMETRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3201001 - APAC - DENSITOMETRIA"
            },
            {
                "codigo": "3500001",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA COLUNA CERVICAL, DORSAL, LOMBAR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500001 - TOMOGRAFIA COMPUTADORIZADA COLUNA CERVICAL, DORSAL, LOMBAR"
            },
            {
                "codigo": "3500003",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO TORAX                         ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500003 - TOMOGRAFIA COMPUTADORIZADA DO TORAX                         "
            },
            {
                "codigo": "3500004",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  SUPERIOR             ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500004 - TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  SUPERIOR             "
            },
            {
                "codigo": "3500005",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE FACE / SEIOS DA FACE / ARTICULACOES TEMPORO-MADIBULARES",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500005 - TOMOGRAFIA COMPUTADORIZADA DE FACE / SEIOS DA FACE / ARTICULACOES TEMPORO-MADIBULARES"
            },
            {
                "codigo": "3500008",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE PESCOCO (PARTES MOLES, LARINGE)",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500008 - TOMOGRAFIA COMPUTADORIZADA DE PESCOCO (PARTES MOLES, LARINGE)"
            },
            {
                "codigo": "3500016",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DAS ARTICULACOES COXO-FEMURAIS   ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500016 - TOMOGRAFIA COMPUTADORIZADA DAS ARTICULACOES COXO-FEMURAIS   "
            },
            {
                "codigo": "3500017",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DAS ARTICULACOES JOELHOS         ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500017 - TOMOGRAFIA COMPUTADORIZADA DAS ARTICULACOES JOELHOS         "
            },
            {
                "codigo": "3500018",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  INFERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500018 - TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  INFERIOR"
            },
            {
                "codigo": "3500019",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  TOTAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500019 - TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  TOTAL"
            },
            {
                "codigo": "3500025",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA  COLUNA CERVICAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500025 - TOMOGRAFIA COMPUTADORIZADA  COLUNA CERVICAL"
            },
            {
                "codigo": "3500027",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA COLUNA LOMBAR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500027 - TOMOGRAFIA COMPUTADORIZADA COLUNA LOMBAR"
            },
            {
                "codigo": "3500065",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN TOTAL COM CONTRASTE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500065 - TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN TOTAL COM CONTRASTE"
            },
            {
                "codigo": "3500070",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE MASTOIDES OU OUVIDOS ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500070 - TOMOGRAFIA COMPUTADORIZADA DE MASTOIDES OU OUVIDOS "
            },
            {
                "codigo": "3500077",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA  DE CRANIO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500077 - TOMOGRAFIA COMPUTADORIZADA  DE CRANIO"
            },
            {
                "codigo": "3500078",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE SELA TURCICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500078 - TOMOGRAFIA COMPUTADORIZADA DE SELA TURCICA"
            },
            {
                "codigo": "3500079",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE COLUNA TORACICA C/ OU S/ CONTRASTE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500079 - TOMOGRAFIA COMPUTADORIZADA DE COLUNA TORACICA C/ OU S/ CONTRASTE"
            },
            {
                "codigo": "3500082",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO OMBRO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500082 - TOMOGRAFIA COMPUTADORIZADA DO OMBRO DIREITO"
            },
            {
                "codigo": "3500083",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO OMBRO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500083 - TOMOGRAFIA COMPUTADORIZADA DO OMBRO ESQUERDO"
            },
            {
                "codigo": "3500087",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO COTOVELO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500087 - TOMOGRAFIA COMPUTADORIZADA DO COTOVELO ESQUERDO"
            },
            {
                "codigo": "3500098",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO JOELHO DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500098 - TOMOGRAFIA COMPUTADORIZADA DO JOELHO DIREITO"
            },
            {
                "codigo": "3500099",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO JOELHO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500099 - TOMOGRAFIA COMPUTADORIZADA DO JOELHO ESQUERDO"
            },
            {
                "codigo": "3500100",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE PERNA DIREITA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500100 - TOMOGRAFIA COMPUTADORIZADA DE PERNA DIREITA"
            },
            {
                "codigo": "3500102",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE PERNA ESQUERDA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500102 - TOMOGRAFIA COMPUTADORIZADA DE PERNA ESQUERDA"
            },
            {
                "codigo": "3500104",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO TORNOZELO ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500104 - TOMOGRAFIA COMPUTADORIZADA DO TORNOZELO ESQUERDO"
            },
            {
                "codigo": "3500105",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO PE DIREITO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500105 - TOMOGRAFIA COMPUTADORIZADA DO PE DIREITO"
            },
            {
                "codigo": "3500106",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO PE ESQUERDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500106 - TOMOGRAFIA COMPUTADORIZADA DO PE ESQUERDO"
            },
            {
                "codigo": "3500109",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE APARELHO URINARIO - COM LAUDO",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500109 - TOMOGRAFIA COMPUTADORIZADA DE APARELHO URINARIO - COM LAUDO"
            },
            {
                "codigo": "3500110",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE ARTICULACOES DE MEMBRO SUPERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500110 - TOMOGRAFIA COMPUTADORIZADA DE ARTICULACOES DE MEMBRO SUPERIOR"
            },
            {
                "codigo": "3500112",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE ARTICULACOES DE MEMBRO INFERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500112 - TOMOGRAFIA COMPUTADORIZADA DE ARTICULACOES DE MEMBRO INFERIOR"
            },
            {
                "codigo": "3500113",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500113 - TOMOGRAFIA COMPUTADORIZADA DO ABDOMEN  "
            },
            {
                "codigo": "3500119",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE PELVE / BACIA / ABDOMEN INFERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500119 - TOMOGRAFIA COMPUTADORIZADA DE PELVE / BACIA / ABDOMEN INFERIOR"
            },
            {
                "codigo": "3500223",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE BACIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500223 - TOMOGRAFIA COMPUTADORIZADA DE BACIA"
            },
            {
                "codigo": "3500231",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE ABDOMEN SUPERIOR",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500231 - TOMOGRAFIA COMPUTADORIZADA DE ABDOMEN SUPERIOR"
            },
            {
                "codigo": "3500271",
                "descricao": "TOMOGRAFIA CONE BEAN MAXILA E MANDIBULA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500271 - TOMOGRAFIA CONE BEAN MAXILA E MANDIBULA"
            },
            {
                "codigo": "3500902",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA COLUNA CERVICAL COM CONTRASTE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500902 - TOMOGRAFIA COMPUTADORIZADA COLUNA CERVICAL COM CONTRASTE"
            },
            {
                "codigo": "3500912",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE COLUNA LOMBO-SACRA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500912 - TOMOGRAFIA COMPUTADORIZADA DE COLUNA LOMBO-SACRA"
            },
            {
                "codigo": "3500913",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE COLUNA LOMBO-SACRA COM CONTRASTE",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500913 - TOMOGRAFIA COMPUTADORIZADA DE COLUNA LOMBO-SACRA COM CONTRASTE"
            },
            {
                "codigo": "3500917",
                "descricao": "TOMOGRAFIA COMPUTADORIZADA DE COLUNA TORACICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3500917 - TOMOGRAFIA COMPUTADORIZADA DE COLUNA TORACICA"
            },
            {
                "codigo": "3516030",
                "descricao": "CONSULTA PRE TRANSPLANTE RENAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "3516030 - CONSULTA PRE TRANSPLANTE RENAL"
            },
            {
                "codigo": "9000003",
                "descricao": "CATETERISMO ",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "9000003 - CATETERISMO "
            },
            {
                "codigo": "9000045",
                "descricao": "CONSULTA EM PSIQUIATRIA - INFANTIL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "9000045 - CONSULTA EM PSIQUIATRIA - INFANTIL"
            },
            {
                "codigo": "9000046",
                "descricao": "CONSULTA EM INFECTOLOGIA - PEDIATRIA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "9000046 - CONSULTA EM INFECTOLOGIA - PEDIATRIA"
            },
            {
                "codigo": "9001008",
                "descricao": "CONSULTA EM GINECOLOGIA CIRURGICA",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "9001008 - CONSULTA EM GINECOLOGIA CIRURGICA"
            },
            {
                "codigo": "9703100",
                "descricao": "ARTERIOGRAFIA PARA INVESTIGACAO HEMORRAGIA CEREBRAL",
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": "9703100 - ARTERIOGRAFIA PARA INVESTIGACAO HEMORRAGIA CEREBRAL"
            },
            {
                "codigo": null,
                "descricao": null,
                "descricaoModalidadeFila": null,
                "codigoAndDescricao": ""
            }
        ]
    }

}