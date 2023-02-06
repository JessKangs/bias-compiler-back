import { prisma } from "../config";

async function addLink(
    biasId: number,
    title: string,
    site: string,
    url: string,
    tag: string
    ) {
    return prisma.links.create({
        data: {
            biasid:biasId,
            title,
            site,
            url,
            tag
            }
    })
}

async function listLinks(
    biasId: number
    ) {
    return prisma.links.findMany({
        where: {
            biasid:biasId
            }
    })
}

async function listLinksByTag(
    biasId:number,
    tag: string
    ) {
    return prisma.links.findMany({
        where: {
            biasid:biasId,
            tag
            }
    })
}

const linksRepository = {
    addLink,
    listLinks,
    listLinksByTag
}

export { linksRepository }

