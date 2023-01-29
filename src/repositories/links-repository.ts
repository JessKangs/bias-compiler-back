import { prisma } from "../config";

async function addLink(
    biasId: number,
    title: string,
    site: string,
    description: string,
    url: string,
    tag: string
    ) {
    return prisma.links.create({
        data: {
            biasid_:biasId,
            title,
            site,
            description,
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
            biasid_:biasId
            }
    })
}

async function listLinksByTag(
    biasId:number,
    tag: string
    ) {
    return prisma.links.findMany({
        where: {
            biasid_:biasId,
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

