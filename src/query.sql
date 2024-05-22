select em.Nombre as empresa, count(pm.IdPersona) as cantidad_personas from Empresa em
left join PersonaEmpresa pm on em.Id = pm.IdEmpresa
left join Persona p on p.Id= pm.IdPersona
group by em.Nombre