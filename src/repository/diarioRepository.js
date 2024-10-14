import con from "./connection.js";

export async function adicionarDiario(diario) {
    const comando = `
       insert into tb_diario (dt_dia, ds_conteudo ) 
					values (?, ?, ?)
    `
    let resposta = await con.query(comando, [diario.dia,diario.conteudo])
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarDiario(idUsuario) {
    const comando = `
        select id_diario id,
               dt_dia data,
               ds_conteudo conteudo,
               id_usuario usuarioId
        from tb_diario 
        where id_usuario = ?   
    `
    let resposta = await con.query(comando, [idUsuario]);
    let registros = resposta[0];

    return registros;
}