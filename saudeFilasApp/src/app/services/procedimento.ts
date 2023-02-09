import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Procedimentos {

    MunicipioCentral: any = {
        "result": [
            {
                "nome":"Selecione a Central",
                "codigo": 0
            },
            {
                "nome":"Central Reguladora Siderópolis",
                "codigo": 106
            },
            {
                "nome":"Central Reguladora Treviso",
                "codigo": 1488
            },
            {
                "nome":"Central Reguladora Criciúma",
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
}